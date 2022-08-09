import { Component, Input, OnInit } from '@angular/core';
import { ButtonService } from 'src/app/core/button.service';
import { Button } from './button';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    @Input() button!: Button;
    constructor(private buttonService: ButtonService) { }

    ngOnInit(): void {
    }

    click() {
        console.log(`Sending ${this.button.name} to Glimboi for activation`);
        this.buttonService.runAction(this.button);
    }
}
