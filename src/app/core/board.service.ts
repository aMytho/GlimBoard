import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Board } from '../board/board';
import { Button } from '../board/button/button';
import { ApiService } from './api.service';
import { mockBoard } from './defaults/mock-boards';
import { BoardConfig } from './types/boardConfig';

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    config: BoardConfig = {
        columns: 12,
        rowHeight: 25,
        squish: null
    }
    allBoards: Board[] = [];
    constructor(
        private apiService: ApiService,
        private notification: MatSnackBar
    ) {
        this.getBoards();
    }

    async getBoards() {
        // Request boards
        let boards = await this.apiService.sendHTTPRequest("boards", "GET", {});
        console.log(boards);

        // If boards exist...
        if (boards.result) {
            if (boards.result.length == 0) {
                // If successful but no boards exist notify the user and create a default one
                console.log("Recieved boards but none exist.");
                let notif = this.notification.open("No boards were found. Creating a default one...", "Close", {
                    panelClass: ["bg-blue-400"],
                    duration: 7000
                });
                // Give them time to read the above notification then create the board
                setTimeout(() => {
                    this.createDefaultBoard();
                    notif.dismiss();
                }, 4000);
            }
            this.allBoards = boards.result;
        } else {
            this.notification.open("Failed to retrieve board information.", "Close", {
                panelClass: ["bg-red-400"],
                duration: 7000
            });
        }
        return boards.result || [];
    }

    get boards(): Board[] {
        return this.boards;
    }

    get activeBoard(): Board {
        return this.allBoards[0];
    }

    get getConfig() {
        return this.config;
    }

    setConfig(cfg: BoardConfig) {
        this.config = cfg;
    }

    async removeBoard(id: number) {
        let boardDeleted = await this.apiService.sendHTTPRequest("boards", "DELETE", {
            id: id
        });
        if (boardDeleted.result && boardDeleted.result.removed == true) {
            this.notification.open("Board deleted.", "Close", {
                panelClass: ["bg-green-400"],
                duration: 7000
            });
            // Remove our copy
            this.allBoards = this.allBoards.filter((board, index) => {
                return board.id != id;
            })
        } else {
            this.notification.open("Failed to delete board.", "Close", {
                panelClass: ["bg-red-400"],
                duration: 7000
            });
        }
    }

    /**
     * Updates our changes and sends them to Glimboi
     */
    async updateBoard() {
        this.activeBoard.buttons = this.stripProps(this.activeBoard.buttons);
        let request = await this.apiService.sendHTTPRequest("boards", "PATCH", this.activeBoard);
        if (request.result == null) {
            this.notification.open("Failed to update board.", "Close", {
                panelClass: ["bg-red-400"],
                duration: 7000
            });
        }
    }

    async createBoard(board: Board) {
        let request = await this.apiService.sendHTTPRequest("boards", "POST", board);
        if (request.result == null) {
            this.notification.open("Failed to create board.", "Close", {
                panelClass: ["bg-red-400"],
                duration: 7000
            });
            return false;
        } else {
            this.notification.open("Board created!.", "Close", {
                panelClass: ["bg-green-400"],
                duration: 7000
            });
            return true;
        }
    }

    private createDefaultBoard() {
        this.allBoards.push(mockBoard);
        this.createBoard(mockBoard);
    }

    createBoardWithName(name: string) {
        let newBoard = Object.assign({}, mockBoard);
        newBoard.name = name;
        newBoard.id = this.getNewId();
        console.log(newBoard);
        this.createBoard(newBoard).then(val => {
            if (val) {
                this.allBoards.unshift(newBoard);
            }
        });
    }

    checkIfBoardExists(name: string) {
        return this.allBoards.find(element => {
            return element.name == name
        });
    }

    setActiveBoard(id: number) {
        let index: number = 0;

        // Find the board
        let board = this.allBoards.filter((val, i) => {
            if (val.id == id) {
                index = i;
                return true
            }
            return false
        });

        // Remove it
        if (board) {
            this.allBoards.splice(index, 1);
        }

        // Add it at the beginning
        this.allBoards.unshift(board[0]);
        console.log(this.allBoards);
    }

    getNewId() {
        let ids: number[] = [];
        this.allBoards.forEach(board => ids.push(board.id));
        ids.sort((one, two) => {
            if (one < two) {
                return 1
            } else if (two < one) {
                return -1
            }
            return 0
        });
        return ids[0] + 1;
    }

    public stripProps(arr: Button[]) {
        return arr.map(btn => {
            delete btn.editable;
            return btn;
        })
    }
}
