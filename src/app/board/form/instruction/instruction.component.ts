import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-instruction',
    templateUrl: './instruction.component.html',
    styleUrls: ['./instruction.component.css']
})
export class InstructionComponent {

    @Input()
    public childForm!: FormGroup

    @Input()
    public index!: number;

    @Output()
    public deleteEvent = new EventEmitter<number>()
    constructor() { }


    static addInstruction(): FormGroup {
        return new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl()
        })
    }

    public delete() {
        this.deleteEvent.next(this.index)
    }

    get nameField(): FormControl {
        return this.childForm.get('name') as FormControl
    }
}
