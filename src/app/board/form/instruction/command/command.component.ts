import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-command',
    templateUrl: './command.component.html',
    styleUrls: ['./command.component.css']
})
export class CommandComponent {
    @Input()
    public childForm!: FormGroup;

    constructor() { }

    static addCommand() {
        return new FormGroup({
            name: new FormControl("", Validators.required),
            trigger: new FormControl("", Validators.required),
            context: new FormControl("", Validators.required)
        })
    }

    get nameField(): FormControl {
        return this.childForm.get("name") as FormControl;
    }

    get triggerField(): FormControl {
        return this.childForm.get("trigger") as FormControl;
    }
}
