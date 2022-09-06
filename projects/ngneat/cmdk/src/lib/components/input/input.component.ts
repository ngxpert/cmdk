import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cmdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  /**
   * Optional controlled state for the value of the search input.
   */
  @Input() value?: string;
  /**
   * Event handler called when the search value changes.
   */
  @Output() valueChanged?: (search: string) => void;

  constructor() {}

  ngOnInit(): void {}
}
