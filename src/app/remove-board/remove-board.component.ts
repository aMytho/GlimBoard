import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Board } from '../board/board';
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
        value = value.trim();
        if (value.length == 0) {
            this.showError("You need to choose a board to delete")
        }
        let boards:Board[] = await this.boardService.getBoards() as Board[];
        for (const board of boards) {
            if (board.name == value) {
                this.boardService.removeBoard(board.id);
                this.error = "";
                this._snackBar.open("Board Deleted!", "Close", {
                    panelClass: ["bg-red-400"],
                    duration: 7000
                });
            }
        }
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
}
