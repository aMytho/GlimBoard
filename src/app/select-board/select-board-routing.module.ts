import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectBoardComponent } from './select-board.component';

const routes: Routes = [
    {
        path: "**", component: SelectBoardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectBoardRoutingModule { }
