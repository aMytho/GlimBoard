import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommandComponent } from './command/command.component';
import { MediaComponent } from './media/media.component';
import { MessageComponent } from './message/message.component';

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

    public dataType: string = "";

    constructor() { }

    static addInstruction(): FormGroup {
        return new FormGroup({
            action: new FormControl('', Validators.required),
            data: new FormControl()
        })
    }

    changeType(selection: any) {
        switch (selection.value) {
            case "Command":
                this.childForm.setControl("data", CommandComponent.addCommand());
                break;
            case "Media":
                this.childForm.setControl("data", MediaComponent.addMedia());
                break;
            case "Message":
                this.childForm.setControl("data", MessageComponent.addMessage());
                break;
        }
        this.dataType = selection.value as string;
    }

    public delete() {
        this.deleteEvent.next(this.index)
    }

    get actionField(): FormControl {
        return this.childForm.get('action') as FormControl
    }

    get dataField() {
        return this.childForm.get("data");
    }
}
