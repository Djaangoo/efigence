import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportsService } from 'src/app/core/services/reports.service';
import { Report, Search } from 'src/app/model/interfaces';
@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: [ './reports.component.scss' ]
})
export class ReportsComponent implements OnInit, OnDestroy {
    reportsList: Report[] = [];
    private dataUpdateSubscription: Subscription;
    private dataSubscription: Subscription;
    constructor(private reportsService: ReportsService ) { }

    ngOnInit() {
        this.dataSubscription = this.reportsService.getData()
            .subscribe((data: Report[]) => {
                this.reportsList = data;
            });
    }

    updateReportsList(values: Search) {
        this.dataUpdateSubscription = this.reportsService.getFilteredData(values)
            .subscribe((data: Report[]) => {
                this.reportsList = data;
                console.log(data.length);
            });
    }

    ngOnDestroy() {
        this.dataSubscription.unsubscribe();
        this.dataUpdateSubscription.unsubscribe();
    }
}
