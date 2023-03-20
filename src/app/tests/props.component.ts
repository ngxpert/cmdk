import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-props',
  template: `
    <div>
      <div data-testid="value">{{ value }}</div>
      <div data-testid="search">{{ search }}</div>

      <button data-testid="controlledValue" (click)="setValue('anteater')">
        Change value
      </button>
      <button data-testid="controlledSearch" (click)="setSearch('eat')">
        Change search value
      </button>

      <cmdk-command
        *ngIf="customFilter"
        [value]="value"
        (valueChanged)="setValue($event)"
        [filter]="customFilterFn"
      >
        <input
          cmdkInput
          placeholder="Search…"
          [value]="search"
          (change)="setSearch($event)"
        />
        <cmdk-list>
          <button cmdkItem>ant</button>
          <button cmdkItem>anteater</button>
        </cmdk-list>
      </cmdk-command>
      <cmdk-command
        *ngIf="!customFilter"
        [value]="value"
        (valueChanged)="setValue($event)"
      >
        <input
          cmdkInput
          placeholder="Search…"
          [value]="search"
          (change)="setSearch($event)"
        />
        <cmdk-list>
          <button cmdkItem>ant</button>
          <button cmdkItem>anteater</button>
        </cmdk-list>
      </cmdk-command>
    </div>
  `,
  styles: [],
})
export class PropsComponent {
  @Input() customFilter = false;
  value = 'ant';
  search = '';
  setValue(value: string) {
    this.value = value;
  }
  setSearch(search: string | Event) {
    if (typeof search === 'string') {
      this.search = search;
    } else {
      this.search = (search.target as HTMLInputElement).value;
    }
  }
  customFilterFn(item: string, search: string) {
    return item.toLowerCase().endsWith(search.toLowerCase());
  }
}
