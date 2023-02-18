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
    options: Array<{ value: string; label: string; isSeparator?: boolean }>;
  }> = [
    {
      groupName: 'Projects',
      options: [
        { value: 'search_projects', label: 'Search Projects...' },
        { value: 'add_project', label: 'Add Project', isSeparator: true },
        { value: 'view_all_projects', label: 'View All Projects' },
      ],
    },
    {
      groupName: 'Help',
      options: [
        { value: 'search_docs', label: 'Search Docs...' },
        { value: 'faqs', label: 'FAQs' },
      ],
    },
  ];

  filter(value: string, search: string) {
    return value === search;
  }
}
