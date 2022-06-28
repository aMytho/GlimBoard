import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { ButtonModule } from './button/button.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KtdGridModule } from "@katoid/angular-grid-layout";
import { DimensionsComponent } from './dimensions/dimensions.component'



@NgModule({
  declarations: [
    BoardComponent,
    AddButtonComponent,
    DimensionsComponent,
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