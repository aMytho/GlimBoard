import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KtdDragEnd, KtdResizeEnd, ktdTrackById } from '@katoid/angular-grid-layout';
import { BoardService } from '../core/board.service';
import { ButtonService } from '../core/button.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent {
    @ViewChild('templateBottomSheet')
    TemplateBottomSheet!: TemplateRef<any>;

    cols: number = 6;
    rowHeight: number = 100;
    trackById = ktdTrackById

    public mode: "add" | "edit" | "dimensions" = "dimensions";
    constructor(
        private buttonService: ButtonService,
        private bottomSheet: MatBottomSheet,
        private boardService: BoardService,
        private notification: MatSnackBar
    ) { }


    get buttons() {
        return this.buttonService.allButtons;
    }

    get boards() {
        return this.boardService.allBoards;
    }

    get board() {
        return this.boardService.activeBoard;
    }

    openTemplateSheetMenu(mode: "add" | "edit" | "dimensions") {
        this.mode = mode;

        // If editing but no button is selected...
        if (mode == "edit" && !this.buttonService.editingButton) {
            this.notification.open("You must select a button to edit ✏️", "Close", {
                panelClass: ["bg-red-400"],
                duration: 5000
            });
        } else {
            this.bottomSheet.open(this.TemplateBottomSheet, {
                panelClass: "slider",
            });
        }
    }

    closeTemplateSheetMenu() {
        this.bottomSheet.dismiss();
    }

    onLayoutUpdated(ev:any) {
        console.log(ev)
    }

    onDragEnded(event: KtdDragEnd) {
        console.log(event);
        this.buttonService.updateButton(event.layoutItem)
    }

    onResize(event: KtdResizeEnd) {
        console.log(event);
        this.buttonService.updateButton(event.layoutItem)
    }

    get config() {
        return this.boardService.getConfig;
    }

    requestBoards() {
        console.log("Attempting to request boards");
        this.notification.open("Attempting to retrieve boards...", "Close", {
            panelClass: ["bg-blue-400"],
            duration: 7000
        });
        setTimeout(() => {
            this.boardService.getBoards();
        }, 4000);
    }
}
