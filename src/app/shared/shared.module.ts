import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectComponent } from './components/select/select.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TagsComponent } from './components/tags/tags.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ CommonModule, FormsModule, HttpClientModule, RouterModule, NgbModule ],
    exports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        NgbModule,
        SelectComponent,
        SearchInputComponent,
        TagsComponent
    ],
    declarations: [ SelectComponent, SearchInputComponent, TagsComponent ],
})
export class SharedModule {}
