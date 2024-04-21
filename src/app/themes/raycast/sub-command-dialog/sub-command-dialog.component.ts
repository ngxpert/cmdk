import { AfterViewInit, Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
import { Content, DynamicViewDirective } from '@ngneat/overview';
import { FinderIconComponent } from 'src/app/icons/finder-icon/finder-icon.component';
import { StarIconComponent } from 'src/app/icons/star-icon/star-icon.component';
import { WindowIconComponent } from 'src/app/icons/window-icon/window-icon.component';

import {
  CommandComponent,
  GroupComponent,
  InputDirective,
  ItemDirective,
  ListComponent,
} from '@ngxpert/cmdk';

export interface SubCommandDialogData {
  selectedValue: string;
}

@Component({
    selector: 'app-sub-command-dialog',
    templateUrl: './sub-command-dialog.component.html',
    standalone: true,
    imports: [
    CommandComponent,
    ListComponent,
    GroupComponent,
    ItemDirective,
    forwardRef(() => RayCastSubItemComponent),
    InputDirective,
    DynamicViewDirective
],
})
export class SubCommandDialogComponent implements AfterViewInit {
  @Input() value = '';
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  readonly items: Array<{ label: string; shortcuts: string; icon: Content }> = [
    {
      label: 'Open Application',
      shortcuts: '↵',
      icon: WindowIconComponent,
    },
    {
      label: 'Show in Finder',
      shortcuts: '⌘ ↵',
      icon: FinderIconComponent,
    },
    {
      label: 'Show Info in Finder',
      shortcuts: '⌘ I',
      icon: FinderIconComponent,
    },
    {
      label: 'Add to Favorites',
      shortcuts: '⌘ ⇧ F',
      icon: StarIconComponent,
    },
  ];

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }
}

@Component({
    selector: 'app-raycast-sub-item',
    template: `
    <div class="cmdk-raycast-submenu-shortcuts">
      @for (key of shortcut.split(' '); track key) {
        <kbd>{{ key }}</kbd>
      }
    </div>
    `,
    styles: [
        `
      :host {
        margin-left: auto;
      }
    `,
    ],
    standalone: true,
    imports: [],
})
export class RayCastSubItemComponent {
  @Input() shortcut = '';
}
