import { Component, Input, OnInit } from '@angular/core';
import { Report } from 'src/app/model/interfaces';

@Component({
    selector: 'app-report-item',
    templateUrl: './report-item.component.html',
    styleUrls: [ './report-item.component.scss' ]
})
export class ReportItemComponent implements OnInit {
    @Input() report: Report = {} as Report;

    constructor() { }

    ngOnInit(): void {
    }

}
