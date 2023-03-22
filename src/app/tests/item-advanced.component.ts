import { Component } from '@angular/core';

@Component({
  selector: 'app-item-advanced',
  template: `
    <div>
      <button data-testid="increment" (click)="setCount()">
        Increment count
      </button>
      <cmdk-command>
        <input cmdkInput placeholder="Search…" />
        <cmdk-list>
          <div *cmdkEmpty>No results.</div>
          <button cmdkItem [value]="'Item A ' + count">
            Item A {{ count }}
          </button>
          <button cmdkItem [value]="'Item B ' + count">
            Item B {{ count }}
          </button>
        </cmdk-list>
      </cmdk-command>
    </div>
  `,
})
export class ItemAdvancedComponent {
  count = 0;

  setCount() {
    this.count++;
  }
}
