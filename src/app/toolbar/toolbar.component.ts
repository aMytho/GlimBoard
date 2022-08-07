import { Component } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
    public display: boolean = true;
    constructor() { }

    hide() {
        this.display = false;
    }

    show() {
        this.display = true;
    }
}
