import { Component, OnInit } from '@angular/core';
import { Board } from '../board/board';
import { BoardService } from '../core/board.service';

@Component({
    selector: 'app-import-board',
    templateUrl: './import-board.component.html',
    styleUrls: ['./import-board.component.css']
})
export class ImportBoardComponent implements OnInit {
    boards: Board[] = [];
    constructor(
        private boardService: BoardService
    ) { }

    ngOnInit(): void {
        this.getBoards();
    }

    getBoards() {
        this.boardService.getBoards().then(data => {
            console.log(data)
            // @ts-ignore
            this.boards = data.boards
        })
    }
}
