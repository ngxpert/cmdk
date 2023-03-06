import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CopiedComponent } from './copied/copied.component';
import { CopyComponent } from './copy/copy.component';
import { FramerIconComponent } from './framer/framer.component';
import { GithubComponent } from './github/github.component';
import { InputComponent } from './input/input.component';
import { LayoutComponent } from './layout/layout.component';
import { LinearIconComponent } from './linear-icon/linear-icon.component';
import { RadioComponent } from './radio/radio.component';
import { RaycastIconComponent } from './raycast-icon/raycast-icon.component';
import { SliderComponent } from './slider/slider.component';
import { VercelIconComponent } from './vercel-icon/vercel-icon.component';
import { AssignToIconComponent } from './assign-to-icon/assign-to-icon.component';
import { AssignToMeIconComponent } from './assign-to-me-icon/assign-to-me-icon.component';
import { ChangeLabelsIconComponent } from './change-labels-icon/change-labels-icon.component';
import { ChangePriorityIconComponent } from './change-priority-icon/change-priority-icon.component';
import { ChangeStatusIconComponent } from './change-status-icon/change-status-icon.component';
import { RemoveLabelIconComponent } from './remove-label-icon/remove-label-icon.component';
import { SetDueDateIconComponent } from './set-due-date-icon/set-due-date-icon.component';

const ICONS = [
  AvatarComponent,
  BadgeComponent,
  ButtonComponent,
  CopiedComponent,
  CopyComponent,
  FramerIconComponent,
  GithubComponent,
  InputComponent,
  LayoutComponent,
  LinearIconComponent,
  RadioComponent,
  RaycastIconComponent,
  SearchComponent,
  SliderComponent,
  VercelIconComponent,
  AssignToIconComponent,
  AssignToMeIconComponent,
  ChangeLabelsIconComponent,
  ChangePriorityIconComponent,
  ChangeStatusIconComponent,
  RemoveLabelIconComponent,
  SetDueDateIconComponent,
];

@NgModule({
  declarations: ICONS,
  imports: [CommonModule],
  exports: ICONS,
})
export class IconsModule {}
