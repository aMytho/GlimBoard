import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonService } from 'src/app/core/button.service';
import { DimensionsComponent } from '../form/dimensions/dimensions.component';
import { InstructionComponent } from '../form/instruction/instruction.component';


@Component({
    selector: 'app-add-button',
    templateUrl: './add-button.component.html',
    styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
    public buttonForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private buttonService: ButtonService
    ) { }

    ngOnInit(): void {
        this.generateForm();
    }

    public generateForm(): void {
        this.buttonForm = this.fb.group({
            instructions: this.fb.array([
                InstructionComponent.addInstruction()
            ]),
            name: this.fb.control("", Validators.required),
            dimensions: DimensionsComponent.addDimensions()
        })
    }

    get instructionAray() {
        return this.buttonForm?.get("instructions") as FormArray;
    }

    get nameField() {
        return this.buttonForm.get("name") as FormControl;
    }

    getDimensionForm() {
        return this.buttonForm.get("dimensions") as FormGroup;
    }

    public addInstruction() {
        this.instructionAray.push(InstructionComponent.addInstruction())
    }

    public deleteChild(index: number) {
        this.instructionAray.removeAt(index)
    }

    public submit() {
        console.log(this.buttonForm);
        if (this.buttonForm.valid) {
            this.buttonService.addButton(this.buttonForm.value);
        }
    }
}
