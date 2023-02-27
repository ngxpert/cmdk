import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cmdk';
  readonly SEPARATOR = '--';

  menu: Array<{
    groupName: string;
    options: Array<
      | { value?: never; label?: never; disabled?: never; isSeparator: boolean }
      | {
          value: string;
          label: string;
          disabled?: boolean;
          isSeparator?: never;
        }
    >;
  }> = [
    {
      groupName: '<strong>Projects</strong>',
      options: [
        { value: 'search_projects', label: 'Search Projects...' },
        { value: 'add_project', label: 'Add Project', disabled: true },
        { isSeparator: true },
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
