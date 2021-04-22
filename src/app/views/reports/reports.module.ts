import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsComponent } from './reports.component';
import { ReportItemComponent } from './components/report-item/report-item.component';
import { FileSizePipe } from './pipes/fileSize/file-size.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        SearchComponent,
        ListComponent,
        ReportsComponent,
        ReportItemComponent,
        FileSizePipe,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class ReportsModule { }
