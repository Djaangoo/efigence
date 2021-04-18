import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Page404Component } from './page404.component';



@NgModule({
    declarations: [
        Page404Component
    ],
    imports: [
        SharedModule
    ]
})
export class Page404Module { }
