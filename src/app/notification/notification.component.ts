import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
    constructor(private _snackBar: MatSnackBar) {
        /*
        this._snackBar.open("This is a custom notification!", "Close", {
            panelClass: ["bg-blue-400"],
            duration: 7000
        });
        */
    }
}
