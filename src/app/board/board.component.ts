import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { KtdGridLayout, ktdTrackById } from '@katoid/angular-grid-layout';
import { BoardService } from '../core/board.service';
import { ButtonService } from '../core/button.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @ViewChild('templateBottomSheet')
    TemplateBottomSheet!: TemplateRef<any>;

    cols: number = 6;
    rowHeight: number = 100;
    layout: KtdGridLayout = [
        { id: '0', x: 0, y: 0, w: 3, h: 3 },
        { id: '1', x: 3, y: 0, w: 3, h: 3 },
        { id: '2', x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 3 },
        { id: '3', x: 3, y: 3, w: 3, h: 3, minW: 2, maxW: 3, minH: 2, maxH: 5 },
    ];
    trackById = ktdTrackById

    onLayoutUpdated(ev:any) {
        console.log(ev)
    }

    public mode: "add" | "edit" | "dimensions" = "dimensions";
    constructor(
        private buttonService: ButtonService,
        private bottomSheet: MatBottomSheet,
        private boardService: BoardService
    ) { }

    ngOnInit(): void {
    }

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
