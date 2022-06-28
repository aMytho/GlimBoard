import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveBoardRoutingModule } from './remove-board-routing.module';
import { RemoveBoardComponent } from './remove-board.component';


@NgModule({
  declarations: [
    RemoveBoardComponent
  ],
  imports: [
    CommonModule,
    RemoveBoardRoutingModule
  ]
})
export class RemoveBoardModule { }
