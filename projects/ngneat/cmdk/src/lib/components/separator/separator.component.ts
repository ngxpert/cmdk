import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CmdkService } from '../../cmdk.service';
import { CommandComponent } from '../command/command.component';

/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
@Component({
  selector: 'cmdk-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorComponent {
  private _cmdkService = inject(CmdkService);
  search$ = this._cmdkService.search$;

  constructor(public cmdkCommand: CommandComponent) {}
}
