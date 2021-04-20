import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: [ './tags.component.scss' ],
})
export class TagsComponent implements OnInit {
  tags = [
      {
          name: 'Bieżące',
          checked: false,
      },
      {
          name: 'Finansowe',
          checked: false,
      },
      {
          name: 'Roczne',
          checked: false,
      },
  ];

  allTags = true;

  constructor() {}

  ngOnInit(): void {}

  clearTags() {
      this.tags = this.tags.map((tag) => {
          return { ...tag, checked: false };
      });

      this.allTags = false;
  }

  toggleTag(tag: any) {
      tag.checked = !tag.checked;

      this.allTags = !this.tags.some((_tag) =>{
          return _tag.checked;
      });
  }
}
