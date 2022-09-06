import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cmdk-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  /** Whether this item is currently disabled. */
  @Input() disabled?: boolean;
  /** Event handler for when this item is selected, either via click or keyboard selection. */
  @Output() selected?: (value: string) => void;
  /**
   * A unique value for this item.
   * If no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`.
   */
  @Input() value?: string;

  constructor() {}

  ngOnInit(): void {}
}
