import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportBoardRoutingModule } from './import-board-routing.module';
import { ImportBoardComponent } from './import-board.component';


@NgModule({
  declarations: [
    ImportBoardComponent
  ],
  imports: [
    CommonModule,
    ImportBoardRoutingModule
  ]
})
export class ImportBoardModule { }
