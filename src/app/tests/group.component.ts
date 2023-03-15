import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  template: `
    <cmdk-command>
      <input
        cmdkInput
        placeholder="Search…"
        [value]="search"
        (change)="setSearch($event)"
      />
      <cmdk-list>
        <div *cmdkEmpty>No results.</div>
        <cmdk-group label="Animals">
          <button cmdkItem>Giraffe</button>
          <button cmdkItem>Chicken</button>
        </cmdk-group>

        <cmdk-group label="Letters">
          <button cmdkItem>A</button>
          <button cmdkItem>B</button>
          <button cmdkItem>Z</button>
        </cmdk-group>

        <cmdk-group label="Numbers" *ngIf="search">
          <button cmdkItem>One</button>
          <button cmdkItem>Two</button>
          <button cmdkItem>Three</button>
        </cmdk-group>
      </cmdk-list>
    </cmdk-command>
  `,
})
export class GroupComponent {
  search = '';

  setSearch(ev: Event) {
    this.search = (ev.target as HTMLInputElement).value;
  }
}
