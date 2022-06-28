import { Injectable } from '@angular/core';
import { Button } from '../board/button/button';
import { ApiService } from './api.service';
import { buttons } from './mock-buttons';

@Injectable({
    providedIn: 'root'
})
export class ButtonService {
    buttons: Button[] = [];
    constructor(
        private apiService: ApiService,
    ) {
        this.buttons = buttons;
    }

    get allButtons() {
        return this.buttons;
    }

    runAction(button: Button) {
        if (button.action === 'runCommand') {
            console.log('run command');
        } else if (button.action === 'runMedia') {
            console.log('run media');
        } else if (button.action === 'sendMessage') {
            this.apiService.send(button);
        }
    }
}
