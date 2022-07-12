import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { KtdDragEnd, KtdGridLayout, KtdResizeEnd, ktdTrackById } from '@katoid/angular-grid-layout';
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

    public mode: "add" | "edit" | "dimensions" = "dimensions";
    constructor(
        private buttonService: ButtonService,
        private bottomSheet: MatBottomSheet,
        private boardService: BoardService
    ) { }


    get buttons() {
        return this.buttonService.allButtons;
    }

    openTemplateSheetMenu(mode: "add" | "edit" | "dimensions") {
        this.mode = mode;
        this.bottomSheet.open(this.TemplateBottomSheet, {
            panelClass: "slider",
        });
    }

    closeTemplateSheetMenu() {
        this.bottomSheet.dismiss();
    }

    get config() {
        return this.boardService.getConfig;
    }
}
