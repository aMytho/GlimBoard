import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from '../core/board.service';

@Component({
    selector: 'app-create-board',
    templateUrl: './create-board.component.html',
    styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

    constructor(
        private boardService: BoardService,
        private notification: MatSnackBar
    ) {}

    ngOnInit(): void {
    }

    submit(name: string) {
        if (name.length == 0) {
            this.notification.open("No name was found.", "Close", {
                panelClass: ["bg-red-400"],
                duration: 7000
            });
            return
        }
        if (!this.boardService.checkIfBoardExists(name)) {
            this.boardService.createBoardWithName("Testaaa")
            console.log(this.boardService.checkIfBoardExists("Testaaa"));
        } else {
            this.notification.open("Cannot create board. Name exists.", "Close", {
                panelClass: ["bg-red-400"],
                duration: 7000
            });
        }

    }
}