import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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

  toggleTheme() {
    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
    } else {
      this.currentTheme = 'light';
    }

    document.body.classList.toggle('dark');
  }
}
