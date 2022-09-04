import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { ButtonModule } from './button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { KtdGridModule } from "@katoid/angular-grid-layout";
import { CastPipe } from './button-form/pipes/form-pipe';
import { BoardSettingsComponent } from './board-settings/board-settings.component';
import { ButtonFormComponent } from './button-form/button-form.component';



@NgModule({
  declarations: [
    BoardComponent,
    BoardSettingsComponent,
    ButtonFormComponent,
    CastPipe
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