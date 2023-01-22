import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'cmdk-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @ViewChild('item') item: ElementRef | undefined;

  private _value: string | undefined;
  @Input()
  set value(value: string | undefined) {
    this._value = value;
  }
  get value() {
    return this._value ?? this.item?.nativeElement.textContent;
  }

  private _visible = true;
  @Input()
  set visible(value: boolean) {
    this._visible = value;
  }
  get visible() {
    return this._visible;
  }
}
