import { Component, Input } from '@angular/core';
import { Content } from '@ngneat/overview';
import { CmdkGroupProps } from '../../types';

@Component({
  selector: 'cmdk-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements CmdkGroupProps {
  @Input() label?: Content;
  @Input() ariaLabel?: string;
}
