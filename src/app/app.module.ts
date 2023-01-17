import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CmdkModule } from '@ngneat/cmdk';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CmdkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
