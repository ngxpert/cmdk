import { ListKeyManagerOption } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  Output,
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
    standalone: true,
})
export class ItemDirective
  implements CmdkItemProps, ListKeyManagerOption, AfterContentInit
{
  private _disabled = false;
  @Input()
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }
  get disabled() {
    return this._disabled;
  }
  @Output() selected = new EventEmitter();
  originalDisplay = '';
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
    if (value !== this.value) {
      this._cmdkService.itemValueChanged(this.value, value);
      this._value = value;
    }
  }
  get value() {
    return this._value
      ? this._value
      : this._elementRef.nativeElement.textContent.trim().toLowerCase();
  }

  private _cmdkService = inject(CmdkService);

  readonly itemId = `cmdk-item-${cmdkItemId++}`;
  _elementRef = inject(ElementRef<HTMLButtonElement>);

  @HostListener('click')
  onClick() {
    this.selected.emit();
  }

  @HostListener('keydown', ['event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev?.key === 'Enter') {
      this.selected.emit();
    }
  }

  @HostBinding('attr.cmdk-hidden')
  get hidden() {
    return !this.filtered;
  }

  @HostBinding('style.display')
  get display() {
    return this.filtered ? this.originalDisplay : 'none';
  }

  @HostBinding('attr.data-value')
  get dataValue() {
    return this.value;
  }

  @HostBinding('attr.role')
  get attrRole() {
    return 'option';
  }

  @HostBinding('type')
  get buttonType() {
    return 'button';
  }

  @HostBinding('attr.aria-selected')
  get isSelected() {
    return this._active;
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
  }

  @HostListener('mouseup')
  onMouseUp() {
    this._cmdkService.itemClicked(this.value);
  }

  ngAfterContentInit(): void {
    this.originalDisplay = window.getComputedStyle(
      this._elementRef.nativeElement
    ).display;
  }
}
