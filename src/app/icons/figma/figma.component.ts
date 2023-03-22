import { Component } from '@angular/core';

@Component({
  selector: 'app-figma',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
  >
    <path
      fill="#e64a19"
      d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
    />
    <path
      fill="#7c4dff"
      d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
    />
    <path
      fill="#66bb6a"
      d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
    />
    <path
      fill="#ff7043"
      d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
    />
    <circle cx="32" cy="24" r="7" fill="#29b6f6" />
  </svg>`,
  styles: [],
})
export class FigmaComponent {}
