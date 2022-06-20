import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ws!: WebSocket;
  constructor(
    private configService: ConfigService
  ) {}

  connect(url: string) {
    this.ws = new WebSocket(url);
    this.ws.onopen = (data) => this.onConnect(data);
    this.ws.onmessage = (data) => this.onMessage(JSON.parse(data.data));
    this.ws.onclose = (data) => this.onClose(data.reason, data.code);
    console.log("Listeners set, all good");
  }

  onConnect(data:any) {
    console.log("Connected to the api", data);
  }

  onMessage(message: string) {
    console.log(message);
  }

  onClose(reason: string, code:number) {
    console.log("Connection closed" , reason, code)
  }

  send(data: any) {
    this.ws.send(JSON.stringify(data));
  }
}
