import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './views/page404/page404.component';
import { ReportsComponent } from './views/reports/reports.component';

const routes: Routes = [
    { path: 'reports', component: ReportsComponent },
    { path: '',   redirectTo: '/reports', pathMatch: 'full' },
    {path: '**', component: Page404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
