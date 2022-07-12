import { Injectable } from '@angular/core';
import { KtdGridLayout, KtdGridLayoutItem } from '@katoid/angular-grid-layout';
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
        console.log(btn, this.buttons);
        btn.id = this.generateID().toString();
        btn.h = btn.dimensions.height;
        btn.w = btn.dimensions.width;
        btn.x = btn.dimensions.positionX;
        btn.y = btn.dimensions.positionY;
        this.buttons = [...this.buttons, btn]
    }

    generateID() {
        let numbers: number[] = [];
        this.buttons.forEach(btn => {
            numbers.push(Number(btn.id));
        });
        numbers.sort((a, b) => {
            return b - a;
        });
        console.log(numbers);
        return numbers[0] + 1
    }

    updateButton(btn: KtdGridLayoutItem) {
        let tempButton: Partial<Button> = {};
        let newButtons = this.buttons.filter((button, index, total) => {
            if (btn.id == button.id) {
                tempButton = button;
                return false
            }
            return true
        });
        tempButton.dimensions!.height = btn.h;
        tempButton.dimensions!.width = btn.w;
        this.buttons = [...newButtons, Object.assign(tempButton as Button, btn)];
    }
}
