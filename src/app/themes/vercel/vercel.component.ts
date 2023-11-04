import { Component, ElementRef, ViewChild } from '@angular/core';
import { Content, DynamicViewModule } from '@ngneat/overview';
import { ContactIconComponent } from 'src/app/icons/contact-icon/contact-icon.component';
import { DocsIconComponent } from 'src/app/icons/docs-icon/docs-icon.component';
import { FeedbackIconComponent } from 'src/app/icons/feedback-icon/feedback-icon.component';
import { PlusIconComponent } from 'src/app/icons/plus-icon/plus-icon.component';
import { ProjectsIconComponent } from 'src/app/icons/projects-icon/projects-icon.component';
import { TeamsIconComponent } from 'src/app/icons/teams-icon/teams-icon.component';
import { NgStyle, NgFor, NgIf } from '@angular/common';
import {
  CommandComponent,
  EmptyDirective,
  GroupComponent,
  InputDirective,
  ItemDirective,
  ListComponent,
  SeparatorComponent,
} from '@ngneat/cmdk';

@Component({
    selector: 'app-vercel',
    templateUrl: './vercel.component.html',
    standalone: true,
    imports: [
        CommandComponent,
        NgStyle,
        NgFor,
        InputDirective,
        ListComponent,
        EmptyDirective,
        NgIf,
        GroupComponent,
        SeparatorComponent,
        ItemDirective,
        DynamicViewModule,
    ],
})
export class VercelComponent {
  @ViewChild('cmdkCommand') cmdkCommand!: ElementRef<HTMLDivElement>;
  inputValue = '';
  pages: Array<string> = ['home'];
  readonly groups: Array<{
    group: string;
    items: Array<{
      label: string;
      itemSelected?: () => void;
      icon: Content;
      shortcut: string;
      separatorOnTop?: boolean;
    }>;
  }> = [
    {
      group: 'Projects',
      items: [
        {
          label: 'Search Projects...',
          itemSelected: () => {
            this.searchProjects();
          },
          icon: ProjectsIconComponent,
          shortcut: 'S P',
        },
        {
          label: 'Create New Project',
          icon: PlusIconComponent,
          shortcut: '',
        },
      ],
    },
    {
      group: 'Teams',
      items: [
        {
          label: 'Search Teams...',
          icon: TeamsIconComponent,
          shortcut: '⇧ P',
        },
        {
          label: 'Create New Team',
          icon: PlusIconComponent,
          shortcut: '',
        },
      ],
    },
    {
      group: 'Help',
      items: [
        {
          label: 'Search Docs...',
          icon: DocsIconComponent,
          shortcut: '⇧ D',
        },
        {
          label: 'Send Feedback...',
          icon: FeedbackIconComponent,
          shortcut: '',
        },
        {
          label: 'Contact Support',
          icon: ContactIconComponent,
          shortcut: '',
          separatorOnTop: true,
        },
      ],
    },
  ];
  readonly projectItems = new Array(6);
  styleTransform = '';
  get activePage() {
    return this.pages[this.pages.length - 1];
  }
  get isHome() {
    return this.activePage === 'home';
  }
  setInputValue(ev: Event) {
    this.inputValue = (ev.target as HTMLInputElement).value;
  }
  onKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      this.bounce();
    }

    if (this.isHome || this.inputValue.length) {
      return;
    }

    if (ev.key === 'Backspace') {
      ev.preventDefault();
      this.popPage();
      this.bounce();
    }
  }
  popPage() {
    this.pages.splice(-1, 1);
  }
  bounce() {
    this.styleTransform = 'scale(0.96)';
    setTimeout(() => {
      this.styleTransform = '';
    }, 100);
  }
  searchProjects() {
    this.pages.push('projects');
  }
}
