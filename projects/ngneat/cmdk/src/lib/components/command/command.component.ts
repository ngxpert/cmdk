import { Component, Input, OnInit, Output } from '@angular/core';
import { CommandProps } from '../../types';

@Component({
  selector: 'cmdk-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit, CommandProps {
  @Input() label?: string;
  @Input() shouldFilter?: boolean;
  @Input() filter?: (value: string, search: string) => number;
  @Input() value?: string;
  @Output() valueChanged?: (value: string) => void;

  allItems = new Set<string>(); // [...itemIds];
  allGroups = new Map<string, Set<string>>(); // groupId → [...itemIds]
  ids = new Map<string, string>(); // id → value
  constructor() {}

  ngOnInit(): void {}
}
