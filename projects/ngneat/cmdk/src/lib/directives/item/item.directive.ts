import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
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
export class ItemDirective implements AfterContentInit, CmdkItemProps {
  filtered = true;
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
  set active(value: boolean) {
    this._active = value;
    if (value) {
      this._elementRef.nativeElement.focus();
    }
  }

  @HostListener('click')
  onClick() {
    this.emitValue();
  }

  ngAfterContentInit() {
    this._cmdkService.activeItem$
      .pipe(untilDestroyed(this))
      .subscribe((itemId) => {
        this.active = itemId === this.itemId;
      });
    this._cmdkService.value$.pipe(untilDestroyed(this)).subscribe((value) => {
      if (this.value === value) {
        this._cmdkService.setActiveItem(this.itemId);
      }
    });
  }

  private emitValue() {
    this._cmdkService.setValue(this.value);
    this._cmdkService.setActiveItem(this.itemId);
  }
}
