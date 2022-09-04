import { Injectable } from '@angular/core';
import { KtdGridLayoutItem } from '@katoid/angular-grid-layout';
import { Button } from '../board/button/button';
import { ApiService } from './api.service';
import { BoardService } from './board.service';

@Injectable({
    providedIn: 'root'
})
export class ButtonService {
    public editingButton: Button | null = null;

    constructor(
        private boardService: BoardService,
        private apiService: ApiService
    ) {}

    get allButtons() {
        return this.boardService.activeBoard?.buttons || [];
    }

    set allButtons(buttons) {
        this.boardService.activeBoard.buttons = buttons;
    }

    runAction(button: Button) {
        // TODO - Read button instructions and exectute
        button.instructions.forEach(instruction => {
            switch(instruction.action) {
                case "Message":
                    this.apiService.sendHTTPRequest("message", "POST", {
                        message: instruction.data.message
                    });
                    break;
                case "Media":
                    this.apiService.sendHTTPRequest("media", "POST", {
                        media: instruction.data
                    });
                    // TO DO MAKE SURE IT WORKS
                    break;
                case "Command":
                    this.apiService.sendHTTPRequest("command", "POST", {
                        command: instruction.data
                    })
                    break;
            }
        })
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
        this.editingButton = null;
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
        this.editingButton = null;
    }

    deleteButton(name: string) {
        this.allButtons = this.allButtons.filter(btn => {
            return btn.name != name;
        });
        this.boardService.updateBoard();
        this.editingButton = null;
    }

    swapEditableState(id: string) {
        this.allButtons = this.allButtons.map(btn => {
            if (id == btn.id) {
                btn.editable = !btn.editable;
            } else {
                btn.editable = false;
            }
            return btn;
        });
    }
}
