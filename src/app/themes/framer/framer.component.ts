import { Component } from '@angular/core';
import { Content, DynamicViewDirective } from '@ngneat/overview';
import { AvatarComponent } from 'src/app/icons/avatar/avatar.component';
import { BadgeComponent } from 'src/app/icons/badge/badge.component';
import { ButtonComponent } from 'src/app/icons/button/button.component';
import { InputComponent } from 'src/app/icons/input/input.component';
import { LayoutComponent } from 'src/app/icons/layout/layout.component';
import { RadioComponent } from 'src/app/icons/radio/radio.component';
import { SliderComponent } from 'src/app/icons/slider/slider.component';

import {
  CommandComponent,
  GroupComponent,
  InputDirective,
  ItemDirective,
  ListComponent,
} from '@ngxpert/cmdk';
import { SearchComponent } from 'src/app/icons/search/search.component';

@Component({
    selector: 'app-framer',
    templateUrl: './framer.component.html',
    standalone: true,
    imports: [
    CommandComponent,
    SearchComponent,
    InputDirective,
    ListComponent,
    GroupComponent,
    ItemDirective,
    DynamicViewDirective
],
})
export class FramerComponent {
  value = 'Button';
  readonly components: Array<{
    value: string;
    icon: Content;
    subTitle: string;
  }> = [
    {
      value: 'Button',
      icon: ButtonComponent,
      subTitle: 'Trigger actions',
    },
    {
      value: 'Input',
      icon: InputComponent,
      subTitle: 'Retrieve user input',
    },
    {
      value: 'Radio',
      icon: RadioComponent,
      subTitle: 'Single choice input',
    },
    {
      value: 'Badge',
      icon: BadgeComponent,
      subTitle: 'Annotate context',
    },
    {
      value: 'Slider',
      icon: SliderComponent,
      subTitle: 'Free range picker',
    },
    {
      value: 'Avatar',
      icon: AvatarComponent,
      subTitle: 'Illustrate the user',
    },
    {
      value: 'Container',
      icon: LayoutComponent,
      subTitle: 'Lay out the items',
    },
  ];

  setValue(value: string) {
    this.value = value;
  }
}
