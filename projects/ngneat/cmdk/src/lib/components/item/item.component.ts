import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CmdkService } from '../../cmdk.service';

@Component({
  selector: 'cmdk-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit {
  @ViewChild('item') item!: ElementRef;
  @ViewChild(TemplateRef, { static: true }) templateRef!: TemplateRef<any>;

  private _value: string = '';
  @Input()
  set value(value: string) {
    this._value = value;
  }
  get value() {
    return this._value ?? this.item.nativeElement.textContent;
  }

  private _cmdkService = inject(CmdkService);

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this._cmdkService.search$.subscribe((s) => this.handleSearch(s));
  }

  handleSearch(search = '') {}
}
