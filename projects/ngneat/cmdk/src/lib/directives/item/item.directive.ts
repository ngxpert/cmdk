import { FocusableOption, FocusOrigin, Highlightable } from '@angular/cdk/a11y';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CmdkService } from '../../cmdk.service';
import { CmdkItemProps } from '../../types';

let cmdkItemId = 0;

@UntilDestroy()
@Directive({
  selector: '[cmdkItem]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-item',
  },
})
export class ItemDirective
  implements CmdkItemProps, Highlightable, FocusableOption
{
  focus(origin?: FocusOrigin | undefined): void {
    this._elementRef.nativeElement.focus();
  }
  @Input() disabled = false;
  getLabel?(): string {
    throw new Error('Method not implemented.');
  }
  setActiveStyles(): void {
    this.active = true;
  }
  setInactiveStyles(): void {
    this.active = false;
  }
  @Input() filtered = true;
  private _active = false;
  private _value: string = '';
  @Input()
  set value(value: string) {
    this._value = value;
  }
  get value() {
    return this._value ?? this._elementRef.nativeElement.textContent;
  }

  private _cmdkService = inject(CmdkService);

  readonly itemId = `cmdk-item-${cmdkItemId++}`;
  private _elementRef = inject(ElementRef<HTMLButtonElement>);

  @HostBinding('style.display')
  get display() {
    return !this.filtered ? 'none' : 'initial';
  }

  @HostBinding('attr.role')
  get attrRole() {
    return 'option';
  }

  @HostBinding('type')
  get buttonType() {
    return 'button';
  }

  @HostBinding('class.cmdk-item-active')
  get active() {
    return this._active;
  }

  @HostBinding('class.cmdk-item-disabled')
  get itemDisabled() {
    return this.disabled;
  }

  @HostBinding('class.cmdk-item-filtered')
  get itemFiltered() {
    return this.filtered;
  }

  set active(value: boolean) {
    this._active = value;
    if (value) {
      this._elementRef.nativeElement.focus();
    }
  }

  @HostListener('mouseup')
  onClick() {
    this._cmdkService.itemClicked(this.value);
  }
}
