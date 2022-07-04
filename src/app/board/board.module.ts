import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { ButtonModule } from './button/button.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KtdGridModule } from "@katoid/angular-grid-layout";
import { InstructionComponent } from './form/instruction/instruction.component'
import { CastPipe } from './form/formPipe';
import { DimensionsComponent } from './form/dimensions/dimensions.component';
import { MessageComponent } from './form/instruction/message/message.component';
import { MediaComponent } from './form/instruction/media/media.component';
import { CommandComponent } from './form/instruction/command/command.component';



@NgModule({
  declarations: [
    BoardComponent,
    AddButtonComponent,
    InstructionComponent,
    CastPipe,
    DimensionsComponent,
    MessageComponent,
    MediaComponent,
    CommandComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    KtdGridModule
  ]
})
export class BoardModule {}