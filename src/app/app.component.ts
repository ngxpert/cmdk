import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concatMap, delay, filter, from, of, ReplaySubject } from 'rxjs';

type OptionItem = {
  value: string;
  label?: string;
  disabled?: boolean;
  isSeparator?: boolean;
  filtered?: boolean;
};

type MenuItem = {
  groupName: string;
  options: Array<OptionItem>;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cmdk';
  loading = false;
  asyncLoading = true;
  readonly SEPARATOR = '--';
  readonly BASIC_CODE = `<cmdk-command
  label="Command Menu"
  (valueChanged)="valueChanged($event)"
  [value]="'faqs'"
>
  <input cmdkInput />
  <div *cmdkEmpty>No results found.</div>
  <cmdk-group [label]="group.groupName" *ngFor="let group of menu">
    <ng-container *ngFor="let item of group.options">
      <cmdk-separator *ngIf="item.isSeparator"></cmdk-separator>
      <button
        cmdkItem
        [disabled]="!!item.disabled"
        *ngIf="!item.isSeparator && item.value"
        [value]="item.value"
      >
        {{ item.label }}
      </button>
    </ng-container>
  </cmdk-group>
</cmdk-command>`;
  readonly LOADER = `<cmdk-command
label="Command Menu"
[loading]="loading"
[value]="'faqs'"
>
<input cmdkInput [disabled]="loading" />
<div *cmdkLoader>Loading...</div>
...
</cmdk-command>`;
  readonly ASYNC = `<cmdk-command
label="Command Menu"
[filter]="null"
[loading]="asyncLoading"
[value]="'faqs'"
>
<input cmdkInput [disabled]="loading" [formControl]="searchFC" />
<div *cmdkLoader>Loading...</div>
<div *cmdkEmpty>No results found.</div>
<cmdk-group
  [label]="group.groupName"
  *ngFor="let group of asyncMenu$ | async"
>
  <ng-container *ngFor="let item of group.options">
    <cmdk-separator *ngIf="item.isSeparator"></cmdk-separator>
    <button
      cmdkItem
      [disabled]="!!item.disabled"
      *ngIf="!item.isSeparator && item.value"
      [value]="item.value"
      [filtered]="item.filtered ?? true"
    >
      {{ item.label }}
    </button>
  </ng-container>
</cmdk-group>
</cmdk-command>`;
  searchFC = new FormControl<string>('', { updateOn: 'blur' });

  asyncMenu = new ReplaySubject<Array<MenuItem>>(1);
  asyncMenu$ = this.asyncMenu.asObservable();
  menu: Array<MenuItem> = [
    {
      groupName: '<strong>Projects</strong>',
      options: [
        { value: 'search_projects', label: 'Search Projects...' },
        {
          value: 'add_project',
          label: 'Add Project (Disabled)',
          disabled: true,
        },
        { isSeparator: true, value: this.SEPARATOR },
        { value: 'view_all_projects', label: 'View All Projects' },
      ],
    },
    {
      groupName: '<strong>Help</strong>',
      options: [
        { value: 'search_docs', label: 'Search Docs...' },
        { value: 'faqs', label: 'FAQs' },
      ],
    },
  ];

  ngOnInit() {
    this.asyncMenu$.subscribe((value) => {
      this.asyncLoading = false;
    });
    this.asyncMenu.next(this.menu);
    this.searchFC.valueChanges
      .pipe(filter((value) => value !== null))
      .subscribe((value) => {
        if (value) {
          this.asyncLoading = true;
          const originalMenu = [...this.menu];
          setTimeout(() => {
            const filterdMenu = originalMenu.filter((menuItem) => {
              menuItem.options = menuItem.options
                .filter((option) => !option.isSeparator)
                .map((option) => ({
                  ...option,
                  filtered: option.value
                    ?.toLowerCase()
                    .includes(value?.toLowerCase()),
                }));
              return (
                menuItem.options.filter((option) => option.filtered).length > 0
              );
            });
            this.asyncMenu.next(filterdMenu);
          }, 3000);
        } else {
          setTimeout(() => {
            this.asyncMenu.next(this.menu);
          }, 3000);
        }
      });
  }

  filter(value: string, search: string) {
    return value === search;
  }

  valueChanged(ev: string) {
    console.log('value changed to', ev);
  }

  getItemContext(item: any) {
    return { $implicit: item };
  }
}
