import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBoardComponent } from './create-board.component';

const routes: Routes = [
    {path: "", component: CreateBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBoardRoutingModule {}