import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBoardRoutingModule } from './create-board-routing.module';
import { CreateBoardComponent } from './create-board.component';


@NgModule({
  declarations: [
    CreateBoardComponent
  ],
  imports: [
    CommonModule,
    CreateBoardRoutingModule
  ]
})
export class CreateBoardModule { }
