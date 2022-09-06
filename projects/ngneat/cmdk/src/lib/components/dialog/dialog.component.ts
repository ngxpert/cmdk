import { Component, Input, OnInit, Output } from '@angular/core';
import { CommandProps } from '../../types';

@Component({
  selector: 'cmdk-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, CommandProps {
  @Input() label?: string;
  @Input() shouldFilter?: boolean;
  @Input() filter?: (value: string, search: string) => number;
  @Input() value?: string;
  @Output() valueChanged?: (value: string) => void;

  constructor() {}

  ngOnInit(): void {}
}
