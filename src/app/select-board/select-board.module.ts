import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectBoardRoutingModule } from './select-board-routing.module';
import { SelectBoardComponent } from './select-board.component';


@NgModule({
  declarations: [
    SelectBoardComponent
  ],
  imports: [
    CommonModule,
    SelectBoardRoutingModule
  ]
})
export class SelectBoardModule { }
