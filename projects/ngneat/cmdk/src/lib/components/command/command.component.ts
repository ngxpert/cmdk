import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CmdkService } from '../../cmdk.service';
import { CommandProps } from '../../types';

@Component({
  selector: 'cmdk-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  providers: [CmdkService],
})
export class CommandComponent implements CommandProps, OnInit {
  @Input() label?: string;
  @Input() shouldFilter?: boolean;
  @Input() filter?: (value: string, search: string) => number;
  @Input() value?: string;
  @Output() valueChanged = new EventEmitter<string>();

  allItems = new Set<string>(); // [...itemIds];
  allGroups = new Map<string, Set<string>>(); // groupId → [...itemIds]
  ids = new Map<string, string>(); // id → value

  static commandId = 0;

  constructor(private _cmdkService: CmdkService) {}

  @HostBinding('id') get id() {
    return `cmdk-command-${CommandComponent.commandId++}`;
  }

  ngOnInit() {
    this._cmdkService.search$.subscribe((s) => this.handleSearch(s));
  }

  handleSearch(search: string | undefined) {
    this.valueChanged.emit(search);
  }
}
