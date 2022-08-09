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
            commandName: new FormControl("", Validators.required),
            commandTrigger: new FormControl("Manual", Validators.required),
        })
    }

    get nameField(): FormControl {
        return this.childForm.get("commandName") as FormControl;
    }

    get triggerField(): FormControl {
        return this.childForm.get("commandTrigger") as FormControl;
    }
}
