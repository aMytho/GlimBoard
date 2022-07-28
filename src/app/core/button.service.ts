import { Injectable } from '@angular/core';
import { KtdGridLayout, KtdGridLayoutItem } from '@katoid/angular-grid-layout';
import { Button } from '../board/button/button';
import { BoardService } from './board.service';
import { buttons } from './defaults/mock-buttons';

@Injectable({
    providedIn: 'root'
})
export class ButtonService {
    constructor(
        private boardService: BoardService
    ) {}

    get allButtons() {
        return this.boardService.activeBoard?.buttons || [];
    }

    set allButtons(buttons) {
        this.boardService.activeBoard.buttons = buttons;
    }

    runAction(button: Button) {
        // TODO - Read button instructions and exectute
    }

    addButton(btn: Button) {
        console.log(btn, this.allButtons);
        btn.id = this.generateID().toString();
        btn.h = btn.dimensions.height;
        btn.w = btn.dimensions.width;
        btn.x = btn.dimensions.positionX;
        btn.y = btn.dimensions.positionY;
        this.allButtons = [...this.allButtons, btn];
        this.boardService.updateBoard();
    }

    generateID() {
        let numbers: number[] = [];
        this.allButtons.forEach(btn => {
            numbers.push(Number(btn.id));
        });
        numbers.sort((a, b) => {
            return b - a;
        });
        console.log(numbers);
        return numbers[0] + 1;
    }

    updateButton(btn: KtdGridLayoutItem) {
        console.log("Updating a button")
        let tempButton: Partial<Button> = {};
        let newButtons = this.allButtons.filter((button, index, total) => {
            if (btn.id == button.id) {
                tempButton = button;
                return false
            }
            return true
        });
        tempButton.dimensions!.height = btn.h;
        tempButton.dimensions!.width = btn.w;
        this.allButtons = [...newButtons, Object.assign(tempButton as Button, btn)];

        this.boardService.updateBoard();
    }
}
