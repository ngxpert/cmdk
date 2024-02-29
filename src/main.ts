import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from './app/shared/shared.module';
import { IconsModule } from './app/icons/icons.module';
import { DynamicViewModule } from '@ngneat/overview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmdkModule } from '@ngxpert/cmdk';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, CmdkModule, FormsModule, ReactiveFormsModule, DynamicViewModule, IconsModule, SharedModule, OverlayModule, A11yModule),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
