import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dimensions',
    templateUrl: './dimensions.component.html',
    styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent {

    @Input()
    public childForm!: FormGroup

    @Output()
    public deleteEvent = new EventEmitter<number>()
    constructor() { }


    static addDimensions(): FormGroup {
        return new FormGroup({
            width: new FormControl(5, [Validators.required, Validators.min(1)]),
            height: new FormControl(5, [Validators.required, Validators.min(1)]),
            positionX: new FormControl(5, [Validators.required, Validators.min(0)]),
            positionY: new FormControl(5, [Validators.required, Validators.min(0)])
        })
    }

    get widthField(): FormControl {
        return this.childForm.get('width') as FormControl
    }
    get heightField(): FormControl {
        return this.childForm.get('height') as FormControl
    }

    get positionX(): FormControl {
        return this.childForm.get("positionX") as FormControl;
    }

    get positionY(): FormControl {
        return this.childForm.get("positionY") as FormControl;
    }
}
