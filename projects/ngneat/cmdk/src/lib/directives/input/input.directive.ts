import { Directive, HostBinding, HostListener, inject } from '@angular/core';
import { CmdkService } from '../../cmdk.service';

@Directive({
  selector: '[cmdkInput]',
})
export class InputDirective {
  private _searchValue: string | undefined;
  private _cmdkService = inject(CmdkService);

  @HostBinding('class.cmdk-input')
  get cmdkInputClass() {
    return true;
  }

  @HostBinding('attr.type')
  get cmdkInputType() {
    return 'search';
  }

  @HostListener('change', ['$event.target.value'])
  search(value: string | undefined) {
    this._searchValue = value;
    this._cmdkService.setSearch(value);
  }
}
