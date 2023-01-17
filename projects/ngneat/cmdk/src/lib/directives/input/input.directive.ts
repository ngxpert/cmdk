import { Attribute, Directive, HostBinding, HostListener } from '@angular/core';
import { CmdkService } from '../../cmdk.service';

@Directive({
  selector: '[cmdkInput]',
})
export class InputDirective {
  private _searchValue: string | undefined;

  constructor(
    @Attribute('value') value: string,
    private _cmdkService: CmdkService
  ) {
    this.search = value;
  }

  @HostBinding('class.cmdk-input')
  get cmdkInputClass() {
    return true;
  }

  @HostListener('change', ['event.target.value'])
  set search(value: string | undefined) {
    this._searchValue = value;
    this._cmdkService.setSearch(value);
  }

  get search() {
    return this._searchValue;
  }
}
