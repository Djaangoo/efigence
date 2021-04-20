import { Component, Input, OnInit } from '@angular/core';
import { Report } from 'src/app/model/interfaces';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
    @Input() data: Report[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
