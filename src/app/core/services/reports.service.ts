import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Report, Search } from 'src/app/model/interfaces';
import { filter, groupBy, map, mergeAll } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReportsService {
    private years$ = new Subject<string[]>();
    private categories$ = new Subject<string[]>();
    private apiUrl: string = environment.apiUrl;
    constructor(private http: HttpClient, private datePipe: DatePipe) {}

    getData() {
        return this.http.get<Report[]>(this.apiUrl).pipe(
            map((data: Report[])=> {
                return data.sort((a, b) => {return b.date - a.date;});
            }),
            map((data: Report[])=> {
                this.setCategories([ ...new Set(data.map((report: Report) => {return report.category;})) ]);
                this.setYears([ ...new Set(
                    data.map((report: Report) => {return this.datePipe.transform(report.date, 'YYYY');}))
                ] as string[]);
                return data.filter((report: Report)=>{
                    return this.datePipe.transform(report.date, 'YYYY') ===
                            this.datePipe.transform(data[0].date, 'YYYY');
                });;
            })
        );
    }

    getFilteredData(formValues: Search) {
        return this.http.get<Report[]>(this.apiUrl).pipe(
            map((data) => {
                return data.sort((a, b) => {return a.date - b.date;})
                    .filter((report: Report)=>{
                        return this.datePipe.transform(report.date, 'YYYY') === formValues.year
                         && (formValues.categories.length ? formValues.categories.includes(report.category) : true)
                         && (report.description.includes(formValues.phrase)
                        && report.title.includes(formValues.phrase));
                    });
            })
        );
    }

    getCategories(): Observable<string[]> {
        return this.categories$.asObservable();
    }

    setCategories(_cat: string[]){
        return this.categories$.next(_cat);
    }

    getYears(): Observable<string[]> {
        return this.years$.asObservable();
    }

    setYears(_years: string[]){
        return this.years$.next(_years);
    }
}
