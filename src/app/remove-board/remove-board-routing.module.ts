import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveBoardComponent } from './remove-board.component';

const routes: Routes = [
    {path: "", component: RemoveBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveBoardRoutingModule { }