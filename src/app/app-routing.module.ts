import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
    {
        path: 'board',
        loadChildren: () =>
            import('./board/board.module').then((m) => m.BoardModule),
    },
    {
        path: "modifyboard/remove", loadChildren: () =>
            import('./remove-board/remove-board.module').then((m) => m.RemoveBoardModule)
    },
    {
        path: "modifyboard/create", loadChildren: () =>
        import("./create-board/create-board.module").then(m => m.CreateBoardModule)
    },
    {
        path: "info",
        component: InfoComponent
    },
    {
        path: '',
        loadChildren: () =>
            import('./board/board.module').then((m) => m.BoardModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }