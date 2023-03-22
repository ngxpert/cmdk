import { Component } from '@angular/core';

@Component({
  selector: 'app-keybindings',
  template: `
    <cmdk-command>
      <input cmdkInput />
      <cmdk-list>
        <div *cmdkEmpty>No results.</div>

        <button cmdkItem value="disabled" disabled>Disabled</button>

        <button cmdkItem value="first">First</button>

        <cmdk-group label="Letters">
          <button cmdkItem>A</button>
          <button cmdkItem>B</button>
          <button cmdkItem>Z</button>
        </cmdk-group>

        <cmdk-group label="Fruits">
          <button cmdkItem>Apple</button>
          <button cmdkItem>Banana</button>
          <button cmdkItem>Orange</button>
          <button cmdkItem disabled>Dragon Fruit</button>
          <button cmdkItem>Pear</button>
        </cmdk-group>

        <button cmdkItem value="last">Last</button>

        <button cmdkItem value="disabled-3" disabled>Disabled 3</button>
      </cmdk-list>
    </cmdk-command>
  `,
  styles: [],
})
export class KeybindingsComponent {}
