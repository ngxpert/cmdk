import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmdk-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
})
export class SeparatorComponent implements OnInit {
  /** Whether this separator should always be rendered. Useful if you disable automatic filtering. */
  @Input() alwaysRender?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
