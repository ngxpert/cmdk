import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CmdkService } from '../../cmdk.service';
import { CommandComponent } from '../../components/command/command.component';

@UntilDestroy({ checkProperties: true })
@Directive({
  selector: '[cmdkItem]',
})
export class ItemDirective implements OnInit {
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

  constructor(
    private _elementRef: ElementRef<HTMLButtonElement>,
    private cmdkCommad: CommandComponent
  ) {}

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
  }

  @HostListener('click')
  onClick() {
    this.cmdkCommad.valueChanged.emit(this.value);
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      this.cmdkCommad.valueChanged.emit(this.value);
    }
  }

  ngOnInit() {
    if (this.cmdkCommad.shouldFilter) {
      this._cmdkService.search$
        .pipe(untilDestroyed(this))
        .subscribe((s) => this.handleSearch(s));
    }
  }

  handleSearch(search = '') {
    if (!search) {
      this.filtered = true;
    } else {
      const filterValue = search.toLowerCase();
      this.filtered = this.cmdkCommad.filter
        ? this.cmdkCommad.filter(this.value, search)
        : this.value.toLowerCase().includes(filterValue);
    }
  }
}
