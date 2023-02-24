import { Directive, HostListener, inject } from '@angular/core';
import { CmdkService } from '../../cmdk.service';

@Directive({
  selector: '[cmdkInput]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-input',
    type: 'search',
  },
})
export class InputDirective {
  private _cmdkService = inject(CmdkService);

  @HostListener('change', ['$event.target.value'])
  search(value: string) {
    this._cmdkService.setSearch(value);
  }
}
