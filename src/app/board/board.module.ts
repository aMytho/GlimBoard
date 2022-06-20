import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [
    BoardComponent,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    ButtonModule
  ]
})
export class BoardModule { }
