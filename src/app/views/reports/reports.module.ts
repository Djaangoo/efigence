import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsComponent } from './reports.component';
import { ReportItemComponent } from './components/report-item/report-item.component';



@NgModule({
    declarations: [
        SearchComponent,
        ListComponent,
        ReportsComponent,
        ReportItemComponent
    ],
    imports: [
        SharedModule
    ]
})
export class ReportsModule { }
