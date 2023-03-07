import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CmdkModule } from '@ngneat/cmdk';
import { DynamicViewModule } from '@ngneat/overview';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { AppComponent } from './app.component';
import { FramerComponent } from './themes/framer/framer.component';
import { FooterComponent } from './sections/footer/footer.component';
import { LinearComponent } from './themes/linear/linear.component';
import { RaycastComponent } from './themes/raycast/raycast.component';
import { VercelComponent } from './themes/vercel/vercel.component';
import { IconsModule } from './icons/icons.module';
import { SharedModule } from './shared/shared.module';
import { ThemeSwitcherComponent } from './sections/theme-switcher/theme-switcher.component';
import { MetaComponent } from './sections/meta/meta.component';
import { SubCommandComponent } from './themes/raycast/sub-command/sub-command.component';
import {
  RayCastSubItemComponent,
  SubCommandDialogComponent,
} from './themes/raycast/sub-command-dialog/sub-command-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FramerComponent,
    FooterComponent,
    LinearComponent,
    RaycastComponent,
    VercelComponent,
    ThemeSwitcherComponent,
    MetaComponent,
    SubCommandComponent,
    SubCommandDialogComponent,
    RayCastSubItemComponent,
  ],
  imports: [
    BrowserModule,
    CmdkModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicViewModule,
    IconsModule,
    SharedModule,
    OverlayModule,
    A11yModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
