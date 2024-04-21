import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { FooterComponent } from './sections/footer/footer.component';
import { CodeBlockComponent } from './shared/components/code-block/code-block.component';
import { ThemeSwitcherComponent } from './sections/theme-switcher/theme-switcher.component';
import { MetaComponent } from './sections/meta/meta.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [
    MetaComponent,
    ThemeSwitcherComponent,
    CodeBlockComponent,
    FooterComponent,
    AsyncPipe
],
})
export class AppComponent {
  currentTheme: 'light' | 'dark' = 'light';
  snippet = `
<cmdk-command>
  <input cmdkInput />
  <div *cmdkEmpty>No results found.</div>
  <cmdk-list>
    <cmdk-group label="Letters">
      <button cmdkItem>a</button>
      <button cmdkItem>b</button>
      <cmdk-separator></cmdk-separator>
      <button cmdkItem>c</button>
    </cmdk-group>
  </cmdk-list>

  <button cmdkItem>Apple</button>
</cmdk-command>`;
  version$: any;

  toggleTheme() {
    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
    } else {
      this.currentTheme = 'light';
    }

    document.body.classList.toggle('dark');
  }

  constructor(private http: HttpClient) {
    this.version$ = this.http
      .get('https://registry.npmjs.org/@ngxpert/cmdk')
      .pipe(map((data: any) => data['dist-tags']['latest']));
  }
}
