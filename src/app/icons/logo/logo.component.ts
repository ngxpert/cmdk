import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `<div class="blurLogo" [ngStyle]="{ width: size, height: size }">
    <div class="bg" aria-hidden>
      <ng-content></ng-content>
    </div>
    <div class="inner">
      <ng-content></ng-content>
    </div>
  </div>`,
})
export class LogoComponent {
  @Input() size = 20;
}
