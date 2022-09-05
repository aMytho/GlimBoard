import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardService } from 'src/app/core/board.service';
import { BoardConfig } from "../../core/types/boardConfig";

@Component({
    selector: 'app-board-settings',
    templateUrl: './board-settings.component.html',
    styleUrls: ['./board-settings.component.css']
})
export class BoardSettingsComponent implements OnInit {
    public dimensionForm!: FormGroup;
    constructor(
        private fb: FormBuilder,
        private boardService: BoardService
    ) { }

    ngOnInit(): void {
        this.generateForm();
    }

    public generateForm(): void {
        this.dimensionForm = this.fb.group({
            columns: this.fb.control(5, [Validators.required, Validators.min(1)]),
            rowHeight: this.fb.control(5, [Validators.required, Validators.min(1)]),
            name: this.fb.control(this.boardService.activeBoard.name,
                Validators.required),
            squish: this.fb.control("default", Validators.required)
        })
    }

    public submit() {
        let boardConfig: BoardConfig = {
            columns: Number(this.dimensionForm.get("columns")?.value),
            rowHeight: Number(this.dimensionForm.get("rowHeight")?.value),
            squish: this.dimensionForm.get("squish")?.value,
        };

        // @ts-ignore
        if (boardConfig.squish == "default") {
            boardConfig.squish = null;
        }

        this.boardService.activeBoard.columns = boardConfig.columns;
        this.boardService.activeBoard.rowHeight = boardConfig.rowHeight;
        this.boardService.activeBoard.squish = boardConfig.squish;
        this.boardService.activeBoard.name = this.dimensionForm.get("name")?.value,
        console.log("Updated board locally");
    }
}
