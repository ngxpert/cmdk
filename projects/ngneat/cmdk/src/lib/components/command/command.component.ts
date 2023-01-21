import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
  ContentChildren,
  QueryList,
  AfterViewInit,
  AfterContentInit,
  ElementRef,
} from '@angular/core';
import { CmdkService } from '../../cmdk.service';
import { ListItemDirective } from '../../directives/list-item/list-item.directive';
import { ListDirective } from '../../directives/list/list.directive';
import { CommandProps } from '../../types';

let commandId = 0;
@Component({
  selector: 'cmdk-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  providers: [CmdkService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'cmdkCommand',
})
export class CommandComponent
  implements CommandProps, OnInit, AfterContentInit
{
  @Input() label?: string;
  @Input() shouldFilter?: boolean;
  @Input() filter?: (value: string, search: string) => number;
  @Input() value?: string;
  @Output() valueChanged = new EventEmitter<string>();

  @ViewChild(TemplateRef, { static: true }) templateRef:
    | TemplateRef<any>
    | undefined;

  /** Element for the panel containing the lists and list-items. */
  @ViewChild('panel') panel: ElementRef | undefined;

  /** Reference to all lists within the cmdk-command. */
  @ContentChildren(ListDirective, { descendants: true }) lists:
    | QueryList<ListDirective>
    | undefined;
  /** Reference to all list-items within the cmdk-command. */
  @ContentChildren(ListItemDirective, { descendants: true }) items:
    | QueryList<ListItemDirective>
    | undefined;

  allItems = new Set<string>(); // [...itemIds];
  allGroups = new Map<string, Set<string>>(); // groupId → [...itemIds]
  ids = new Map<string, string>(); // id → value

  constructor(private _cmdkService: CmdkService) {}

  readonly panelId = `cmdk-command-${commandId++}`;

  ngOnInit() {
    this._cmdkService.search$.subscribe((s) => this.handleSearch(s));
  }

  ngAfterContentInit(): void {
    console.log(this.lists?.length);
    this.items?.forEach((i) =>
      console.log(i._elementRef.nativeElement.textContent)
    );
  }

  handleSearch(search: string | undefined) {}
}
