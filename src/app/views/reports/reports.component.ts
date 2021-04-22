import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/core/services/reports.service';
import { Report, Search } from 'src/app/model/interfaces';
@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: [ './reports.component.scss' ]
})
export class ReportsComponent implements OnInit {
    reportsList: Report[] = [];
    constructor(private reportsService: ReportsService) { }

    ngOnInit() {
        this.reportsService.getData()
            .subscribe((data: Report[]) => {
                this.reportsList = data;
            });
    }

    updateReportsList(values: Search) {
        console.log(values);
        this.reportsService.getFilteredData(values)
            .subscribe((data: Report[]) => {
                this.reportsList = data;
                console.log(data.length);
            });
    }
}
