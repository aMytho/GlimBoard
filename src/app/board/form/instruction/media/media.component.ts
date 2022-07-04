import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css']
})
export class MediaComponent {

    @Input()
    public childForm!: FormGroup

    constructor() { }

    static addMedia(): FormGroup {
        return new FormGroup({
            media: new FormControl("", Validators.required)
        });
    }

    get mediaField(): FormControl {
        return this.childForm.get("media") as FormControl;
    }
}
