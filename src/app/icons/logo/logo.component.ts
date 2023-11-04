import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

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
    standalone: true,
    imports: [NgStyle],
})
export class LogoComponent {
  @Input() size = 20;
}
