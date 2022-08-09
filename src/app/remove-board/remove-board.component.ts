import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from '../core/board.service';

@Component({
    selector: 'app-remove-board',
    templateUrl: './remove-board.component.html',
    styleUrls: ['./remove-board.component.css']
})
export class RemoveBoardComponent {
    error: string = "";
    constructor(
        private boardService: BoardService,
        private _snackBar: MatSnackBar
    ) { }

    async deleteBoard(value: string) {
        this.boardService.removeBoard(Number(value));
    }

    showError(msg: string) {
        this.error = msg
    }

    checkLiveInput(msg: string) {
        if (msg.length == 0) {
            this.showError("Cannot delete an empty board!");
        } else {
            this.showError("");
        }
    }

    get boards() {
        return this.boardService.allBoards;
    }
}
