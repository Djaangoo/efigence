import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsService } from './services/reports.service';

@NgModule({
    imports: [ HttpClientModule, FormsModule, ReactiveFormsModule ],
    exports: [ HttpClientModule, FormsModule, ReactiveFormsModule ],
    providers: [ ReportsService, DatePipe ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}
