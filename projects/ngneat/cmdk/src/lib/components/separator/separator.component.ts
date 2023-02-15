import { Component, inject, OnInit } from '@angular/core';
import { CmdkService } from '../../cmdk.service';

/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
@Component({
  selector: 'cmdk-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
})
export class SeparatorComponent {
  private _cmdkService = inject(CmdkService);
  search$ = this._cmdkService.search$;
}
