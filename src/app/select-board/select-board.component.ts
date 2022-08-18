import { Component } from '@angular/core';
import { BoardService } from '../core/board.service';

@Component({
    selector: 'app-select-board',
    templateUrl: './select-board.component.html',
    styleUrls: ['./select-board.component.css']
})
export class SelectBoardComponent {

    constructor(
        private boardService: BoardService
    ) { }


    get boards() {
        return this.boardService.allBoards;
    }

    selectBoard(val: string) {
        console.log(`Selecting board with ID of ${val}`);
        this.boardService.setActiveBoard(Number(val));
    }

}
