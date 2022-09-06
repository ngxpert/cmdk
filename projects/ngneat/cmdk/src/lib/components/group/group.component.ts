import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmdk-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  /** Optional heading to render for this group. */
  // heading?: React.ReactNode
  /** If no heading is provided, you must provide a value that is unique for this group. */
  @Input() value?: string;
  constructor() {}

  ngOnInit(): void {}
}
