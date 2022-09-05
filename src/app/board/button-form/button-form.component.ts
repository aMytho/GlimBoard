import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ButtonService } from 'src/app/core/button.service';
import { Button } from '../button/button';

@Component({
  selector: 'app-button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.css']
})
export class ButtonFormComponent implements OnInit {
    public mode: string = "Add";
    public buttonForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private buttonService: ButtonService,
        private bottomSheet: MatBottomSheet
    ) { }

    ngOnInit(): void {
        this.generateForm();
    }

    public generateForm(): void {
        if (this.buttonService.editingButton) {
            this.loadExistingData();
            this.mode = "Edit";
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

        let controls: any[] = [];
        btn.instructions.forEach(instruction => {
            controls.push(
                this.fb.group({
                action: this.fb.control(instruction.action, Validators.required),
                data: this.fb.group({
                    message: this.fb.control(instruction.data.message || ""),
                    mediaName: this.fb.control(instruction.data.mediaName || ""),
                    mediaType: this.fb.control(instruction.data.mediaType || ""),
                    commandName: this.fb.control(instruction.data.commandName || ""),
                    commandTrigger: this.fb.control(instruction.data.commandTrigger || "")
                })
            }))
        });

        this.buttonForm = this.fb.group({
            instructions: this.fb.array(controls),
            name: this.fb.control(btn.name, Validators.required),
            dimensions: this.fb.group({
                width: this.fb.control(btn.w, [Validators.required, Validators.min(1)]),
                height: this.fb.control(btn.h, [Validators.required, Validators.min(1)]),
                positionX: this.fb.control(btn.x, [Validators.required, Validators.min(0)]),
                positionY: this.fb.control(btn.y, [Validators.required, Validators.min(0)])
            })
        });
        console.log(this.buttonForm.value);
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
        this.instructionAray.push(this.fb.group({
            action: this.fb.control("", Validators.required),
            data: this.fb.group({
                message: this.fb.control(""),
                mediaName: this.fb.control(""),
                mediaType: this.fb.control(""),
                commandName: this.fb.control(""),
                commandTrigger: this.fb.control("")
            })
        }));
    }

    public delete(index: number) {
        this.instructionAray.removeAt(index);
    }

    public submit() {
        console.log(this.buttonForm.value);
        if (this.buttonForm.valid) {
            if (this.mode == "Edit") {
                this.buttonService.updateButton(
                    Object.assign(this.buttonForm.value, {id: this.buttonService.editingButton!.id})
                    );
            } else {
                this.buttonService.addButton(this.buttonForm.value);
            }
            this.bottomSheet.dismiss();
        }
    }
}