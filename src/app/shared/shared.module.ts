import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [ CommonModule, HttpClientModule, RouterModule, NgbModule, NgSelectModule ],
    exports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        NgbModule,
        NgSelectModule
    ],
    declarations: [ ],
})
export class SharedModule {}
