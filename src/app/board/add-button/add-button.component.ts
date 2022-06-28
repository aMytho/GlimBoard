import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-button',
    templateUrl: './add-button.component.html',
    styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
    buttonForm = new FormGroup({
        buttonName: new FormControl('', Validators.required),
        otherName: new FormControl(''),
        action: new FormControl('')
    })
    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.warn(this.buttonForm.value)
    }

}
