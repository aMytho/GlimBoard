import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../core/api.service';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent {
    public savedURL: string;
    constructor(
        private apiService: ApiService,
        private notification: MatSnackBar
    ) {
        this.savedURL = this.apiService.getUrl();
    }

    public saveURL(val: string) {
        if (val) {
            this.apiService.setURL(val);
            this.notification.open("URL Saved!", "Close", {
                panelClass: ["bg-green-400"],
                duration: 5000
            });
        } else {
            this.notification.open("You must enter a value!", "Close", {
                panelClass: ["bg-red-400"],
                duration: 5000
            });
        }
    }
}