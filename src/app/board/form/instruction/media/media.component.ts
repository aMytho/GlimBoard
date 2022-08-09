import { Component, Input } from '@angular/core';
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
            mediaName: new FormControl("", Validators.required),
            mediaType: new FormControl("", Validators.required)
        });
    }

    get mediaField(): FormControl {
        return this.childForm.get("mediaName") as FormControl;
    }
}
