import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  inject,
  ContentChild,
  AfterContentInit,
} from '@angular/core';
import { Content } from '@ngneat/overview';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CmdkService } from '../../cmdk.service';
import { EmptyDirective } from '../../directives/empty/empty.directive';
import { ItemDirective } from '../../directives/item/item.directive';
import { CmdkCommandProps } from '../../types';

let commandId = 0;
@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'cmdk-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  providers: [CmdkService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'cmdkCommand',
})
export class CommandComponent implements CmdkCommandProps, AfterContentInit {
  @Input() label?: Content;
  @Input() ariaLabel?: string;
  @Input() shouldFilter = true;
  @Input() filter?: (value: string, search: string) => boolean;
  @Input() value?: string;
  @Output() valueChanged = new EventEmitter<string>();

  @ContentChildren(ItemDirective, { descendants: true })
  items: QueryList<ItemDirective> | undefined;
  @ContentChild(EmptyDirective) empty!: EmptyDirective;

  readonly panelId = `cmdk-command-${commandId++}`;

  private cmdkService = inject(CmdkService);

  ngAfterContentInit() {
    if (this.shouldFilter) {
      this.cmdkService.search$
        .pipe(untilDestroyed(this))
        .subscribe(() => this.handleSearch());
    }
    if (this.items) {
      this.items.first.active = true;
    }
  }

  handleSearch() {
    if (this.items) {
      this.empty.cmdkEmpty = !this.items.some((item) => item.filtered);
      this.items.first.active = true;
    }
  }
}
