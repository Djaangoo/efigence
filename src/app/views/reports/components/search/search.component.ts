import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ReportsService } from 'src/app/core/services/reports.service';
import {  FormControl } from '@angular/forms';
import {  Search } from 'src/app/model/interfaces';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ],
})
export class SearchComponent implements OnInit {
    @Output() searchFormChanged = new EventEmitter<Search>();
    searchPhrase = '';
    categories: string[] = [];
    yearsList: string[] = [];
    searchForm: any;
    selectedYear = '';

    constructor(private reportsService: ReportsService, private formBuilder: FormBuilder) {
        this.searchForm = this.formBuilder.group({
            phrase: '',
            categories: this.formBuilder.array([]),
            year: '',
        });
    }

    ngOnInit(){
        this.reportsService.getCategories().subscribe((_cat) => {return this.categories = _cat;});
        this.reportsService.getYears().subscribe((_years) => {
            this.selectedYear = this.selectedYear ?  this.selectedYear : _years[0];
            return this.yearsList = _years;
        });
    }
    clearCategories() {
        const checkArray: FormArray = this.searchForm.get('categories') as FormArray;
        checkArray.clear();
        this.submitForm();
    }

    toggleCategory(categoryName: string) {
        const checkArray: FormArray = this.searchForm.get('categories') as FormArray;

        if (!checkArray.value.includes(categoryName)) {
            checkArray.push(new FormControl(categoryName));
        } else {
            let i = 0;
            checkArray.controls.forEach((item) => {
                if (item.value === categoryName) {
                    checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }

        this.submitForm();
    }

    submitForm() {
        this.searchFormChanged.emit(this.searchForm.getRawValue() as Search);
    }
}
