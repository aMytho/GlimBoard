import { Injectable } from '@angular/core';
import { KtdGridLayoutItem } from '@katoid/angular-grid-layout';
import { ApiService } from './api.service';
import { BoardConfig } from './types/boardConfig';
import { OutgoingPacket } from './types/packet';

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    config:BoardConfig = {
        columns: 12,
        rowHeight: 25,
        squish: null
    }
    constructor(
        private apiService: ApiService
    ) {
    }

    async getBoards() {
        let packet: OutgoingPacket = {
            action: "board",
            ID: 1,
            request: {
                type: "getBoards"
            }
        }
        return await this.apiService.awaitResponse(packet, 1);
    }

    removeBoard(id: number) {

    }

    editBoard(id: number) {

    }

    createBoard(id: number) {

    }

    get getConfig() {
        return this.config;
    }

    setConfig(cfg: BoardConfig) {
        this.config = cfg;
    }
}
