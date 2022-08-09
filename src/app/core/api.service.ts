import { EventEmitter, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { OutgoingPacket } from './types/packet';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    ws!: WebSocket;
    publicisConnected = false;
    private emitter = new EventEmitter<any>();
    constructor(
        private configService: ConfigService
    ) { }


    connect() {
        return new Promise(resolve => {
            this.ws = new WebSocket(
                this.configService.get("url", "http://localhost:4201/api/", false)
                );
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

    onMessage(message: any) {
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

    async sendHTTPRequest(endpint: string, method: string, body: any = {}) {
        try {
            let url = this.configService.get("url", "http://localhost:4201/api/", false);
            let response = await fetch(url + endpint, {
                method: method,
                body: this.getCheck(method, body)
            });
            let result = await response.json();
            console.log(result, response.status);
            return {
                status: response.status,
                result: result
            };
        } catch (e) {
            console.log(e)
            return {
                status: 1,
                result: null
            };
        }
    }

    getCheck(method: string, body: any) {
        if (method == "GET") return undefined;
        return JSON.stringify(body);
    }
}
