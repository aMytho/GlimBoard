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
        // TODO - Read button instructions and exectute
    }

    addButton(btn: Button) {
        console.log(btn, this.buttons)
        this.buttons.push(btn);
    }

    generateID() {
        let numbers: number[] = [];
        this.buttons.forEach(btn => {
            numbers.push(btn.id);
        });
        numbers.sort((a, b) => {
            return b - a;
        });
        console.log(numbers);
        return numbers[0] + 1
    }
}
