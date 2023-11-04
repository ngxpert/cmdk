import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-copied',
    template: `<svg
    [attr.width]="width"
    [attr.height]="height"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 13L9 17L19 7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>`,
    styles: [],
    standalone: true,
})
export class CopiedComponent {
  @Input() height = '16';
  @Input() width = '16';
}
