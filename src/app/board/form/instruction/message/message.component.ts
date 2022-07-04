import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent {

    @Input()
    public childForm!: FormGroup

    constructor() { }

    static addMessage(): FormGroup {
        return new FormGroup({
            message: new FormControl("", Validators.required)
        });
    }

    get mesageField(): FormControl {
        return this.childForm.get("message") as FormControl;
    }
}
