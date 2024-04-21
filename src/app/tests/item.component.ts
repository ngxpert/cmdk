import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div>
      <button data-testid="mount" (click)="mount = !mount">
        Toggle item B
      </button>
    
      <button data-testid="unmount" (click)="unmount = !unmount">
        Toggle item A
      </button>
    
      <button data-testid="many" (click)="many = !many">
        Toggle many items
      </button>
    
      <cmdk-command>
        <input cmdkInput placeholder="Search…" />
        <cmdk-list>
          <div *cmdkEmpty>No results.</div>
          @if (!unmount) {
            <button cmdkItem>A</button>
          }
          @if (many) {
            <button cmdkItem>1</button>
            <button cmdkItem>2</button>
            <button cmdkItem>3</button>
          }
          @if (mount) {
            <button cmdkItem>B</button>
          }
        </cmdk-list>
      </cmdk-command>
    </div>
    `,
})
export class ItemComponent {
  mount = false;
  unmount = false;
  many = false;
}
