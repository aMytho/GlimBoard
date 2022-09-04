import { Component, Input } from '@angular/core';
import { ButtonService } from 'src/app/core/button.service';
import { Button } from './button';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {

    @Input() public button!: Button;
    constructor(
        private buttonService: ButtonService,
        ) { }

    click() {
        console.log(`Sending ${this.button.name} to Glimboi for activation`);
        this.buttonService.runAction(this.button);
    }

    delete() {
        this.buttonService.deleteButton(this.button.name);
    }

    edit() {
        this.buttonService.editingButton = this.button;
        this.buttonService.swapEditableState(this.button.id);
        console.log(this.button);
    }
}
