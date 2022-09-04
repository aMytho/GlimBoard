import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonService } from 'src/app/core/button.service';
import { Button } from '../button/button';

@Component({
  selector: 'app-button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.css']
})
export class ButtonFormComponent implements OnInit {

    public buttonForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private buttonService: ButtonService
    ) { }

    ngOnInit(): void {
        this.generateForm();
    }

    public generateForm(): void {
        if (this.buttonService.editingButton) {
            this.loadExistingData();
            return;
        }

        this.buttonForm = this.fb.group({
            instructions: this.fb.array([
                this.fb.group({
                    action: this.fb.control('', Validators.required),
                    data: this.fb.group({
                        message: this.fb.control(""),
                        mediaName: this.fb.control(""),
                        mediaType: this.fb.control(""),
                        commandName: this.fb.control(""),
                        commandTrigger: this.fb.control("")
                    })
                })
            ]),
            name: this.fb.control("", Validators.required),
            dimensions: this.fb.group({
                width: this.fb.control(5, [Validators.required, Validators.min(1)]),
                height: this.fb.control(5, [Validators.required, Validators.min(1)]),
                positionX: this.fb.control(5, [Validators.required, Validators.min(0)]),
                positionY: this.fb.control(5, [Validators.required, Validators.min(0)])
            })
        });
    }

    public loadExistingData(): void {
        let btn: Button = this.buttonService.editingButton as Button;
    }

    get instructionAray() {
        return this.buttonForm.get("instructions") as FormArray;
    }

    get nameField() {
        return this.buttonForm.get("name") as FormControl;
    }

    get dimensionsField() {
        return this.buttonForm.get("dimensions") as FormGroup;
    }

    public resetInstruction(index: number, selection: any) {
        this.instructionAray.controls[index].setValue({
            action: selection.value,
            data: {
                mediaName: "",
                mediaType: "",
                message: "",
                commandName: "",
                commandTrigger: ""
            }
        });
    }

    getDimensionForm() {
        return this.buttonForm.get("dimensions") as FormGroup;
    }

    public addInstruction() {
        this.instructionAray.push(this.fb.control(""));
    }

    public delete(index: number) {
        this.instructionAray.removeAt(index);
    }

    public submit() {
        console.log(this.buttonForm);
        if (this.buttonForm.valid) {
            this.buttonService.addButton(this.buttonForm.value);
        }
    }
}