import {
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CmdkService } from '../../cmdk.service';

UntilDestroy({ checkProperties: true });
@Directive({
  selector: '[cmdkItem]',
})
export class ItemDirective implements OnInit {
  private _filtered = true;
  private _value: string = '';
  @Input()
  set value(value: string) {
    this._value = value;
  }
  get value() {
    return this._value ?? this._elementRef.nativeElement.textContent;
  }

  private _cmdkService = inject(CmdkService);

  constructor(private _elementRef: ElementRef<HTMLButtonElement>) {}

  @HostBinding('style.display')
  get display() {
    return !this._filtered ? 'none' : 'initial';
  }

  @HostBinding('attr.role')
  get attrRole() {
    return 'option';
  }

  @HostBinding('type')
  get buttonType() {
    return 'button';
  }

  ngOnInit() {
    this._cmdkService.search$
      .pipe(untilDestroyed(this))
      .subscribe((s) => this.handleSearch(s));
  }

  handleSearch(search = '') {
    if (!search) {
      this._filtered = true;
    } else {
      const filterValue = search.toLowerCase();
      this._filtered = this.value.toLowerCase().includes(filterValue);
    }
  }
}
