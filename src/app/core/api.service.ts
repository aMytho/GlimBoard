import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    ws!: WebSocket;
    publicisConnected = false;
    private URL: string = localStorage.getItem("URL") || "localhost";
    constructor() { }


    async sendHTTPRequest(endpint: string, method: string, body: any = {}) {
        try {
            let url = `http://${this.URL || "localhost"}:4201/api/`;
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

    setURL(url: string) {
        this.URL = url;
        localStorage.setItem("URL", url);
    }

    getUrl(): string {
        return this.URL || "localhost";
    }
}
