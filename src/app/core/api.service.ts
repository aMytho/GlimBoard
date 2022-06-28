import { EventEmitter, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { IncomingPacket, OutgoingPacket } from './types/packet';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    ws!: WebSocket;
    private emitter = new EventEmitter<any>();
    constructor(
        private configService: ConfigService
    ) { }


    connect(url: string) {
        return new Promise(resolve => {
            this.ws = new WebSocket(url);
            this.ws.onopen = (data) => {
                resolve(true)
                this.onConnect(data);
            }
            this.ws.onmessage = (data) => this.onMessage(JSON.parse(data.data));
            this.ws.onclose = (data) => this.onClose(data.reason, data.code);
            console.log("Listeners set, all good");
            if (true) {
                resolve(true)
            }
        })
    }

    onConnect(data: any) {
        console.log("Connected to the api", data);
    }

    onMessage(message: IncomingPacket) {
        console.log(message);
        this.emitter.emit(message);
    }

    onClose(reason: string, code: number) {
        console.log("Connection closed", reason, code)
    }

    send(data: OutgoingPacket) {
        this.ws.send(JSON.stringify(data));
    }

    awaitResponse(message:OutgoingPacket, ID: number) {
        return new Promise(resolve => {
            // Send the message
            this.ws.send(JSON.stringify(message));
            // Once we get a response return the value.
            this.emitter.subscribe((val) => {
                console.log(val);
                if (val.ID == ID) {
                    resolve(val);
                }
            })
        })
    }
}
