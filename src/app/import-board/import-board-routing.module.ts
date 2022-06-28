import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportBoardComponent } from './import-board.component';

const routes: Routes = [
    {path: "", component: ImportBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportBoardRoutingModule { }
