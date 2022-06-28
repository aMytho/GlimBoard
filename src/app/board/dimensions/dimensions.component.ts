import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompactType } from '@katoid/angular-grid-layout/lib/utils/react-grid-layout.utils';
import { BoardService } from 'src/app/core/board.service';
import { BoardConfig } from 'src/app/core/types/boardConfig';

@Component({
    selector: 'app-dimensions',
    templateUrl: './dimensions.component.html',
    styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
    dimensionForm = new FormGroup({
        columns: new FormControl('', Validators.required),
        rowHeight: new FormControl('', Validators.required),
        squish: new FormControl('', Validators.required)
    });
    defaults = this.boardService.getConfig;
    constructor(private boardService: BoardService) { }

    ngOnInit(): void {
    }

    onSubmit(){
        if (!this.dimensionForm.valid) return;
        let values = this.dimensionForm.value;
        console.log(values);

        let output:BoardConfig = {
            columns: Number(values.columns) || 12,
            rowHeight: Number(values.rowHeight) || 25,
            squish: (values.squish as CompactType) || null
        }

        this.boardService.setConfig(output);
    }
}