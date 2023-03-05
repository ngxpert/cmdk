import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Themes: 'linear' | 'raycast' | 'vercel' | 'framer' = 'framer';
  version = '0.0.1';
  copied = false;

  snippet = `
<cmdk-command>
  <input cmdkInput />
  <div *cmdkEmpty>No results found.</div>
  <cmdk-group label="Letters">
    <button cmdkItem>a</button>
    <button cmdkItem>b</button>
    <cmdk-separator></cmdk-separator>
    <button cmdkItem>c</button>
  </cmdk-group>

  <button cmdkItem>Apple</button>
</cmdk-command>`;

  async copyInstall() {
    try {
      await navigator.clipboard.writeText(`ng add @ngneat/cmdk`);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    } catch (e) {}
  }
}
