import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
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
}
