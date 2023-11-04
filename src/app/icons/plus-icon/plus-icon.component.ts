import { Component } from '@angular/core';

@Component({
    selector: 'app-plus-icon',
    template: `<svg
    fill="none"
    height="24"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M12 5v14"></path>
    <path d="M5 12h14"></path>
  </svg>`,
    styles: [],
    standalone: true,
})
export class PlusIconComponent {}
