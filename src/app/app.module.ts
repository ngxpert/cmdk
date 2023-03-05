import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CmdkModule } from '@ngneat/cmdk';
import { DynamicViewModule } from '@ngneat/overview';

import { AppComponent } from './app.component';
import { FramerComponent } from './components/framer/framer.component';
import { SearchComponent } from './icons/search/search.component';
import { ButtonComponent } from './icons/button/button.component';
import { InputComponent } from './icons/input/input.component';
import { RadioComponent } from './icons/radio/radio.component';
import { BadgeComponent } from './icons/badge/badge.component';
import { SliderComponent } from './icons/slider/slider.component';
import { AvatarComponent } from './icons/avatar/avatar.component';
import { LayoutComponent } from './icons/layout/layout.component';
import { CopiedComponent } from './icons/copied/copied.component';
import { CopyComponent } from './icons/copy/copy.component';
import { GithubComponent } from './icons/github/github.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FramerComponent,
    SearchComponent,
    ButtonComponent,
    InputComponent,
    RadioComponent,
    BadgeComponent,
    SliderComponent,
    AvatarComponent,
    LayoutComponent,
    CopiedComponent,
    CopyComponent,
    GithubComponent,
    CodeBlockComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CmdkModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicViewModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
