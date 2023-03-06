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
];

@NgModule({
  declarations: ICONS,
  imports: [CommonModule],
  exports: ICONS,
})
export class IconsModule {}
