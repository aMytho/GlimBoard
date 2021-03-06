import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
            import('./import-board/import-board.module').then((m) => m.ImportBoardModule)
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