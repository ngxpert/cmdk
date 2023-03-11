import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
} from '@angular/core';
import { ItemDirective } from '../../directives/item/item.directive';
import { CmdkListProps } from '../../types';

let cmdkListId = 0;

@Component({
  selector: 'cmdk-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-list',
  },
})
export class ListComponent implements AfterViewInit, OnDestroy, CmdkListProps {
  @Input() ariaLabel?: string;

  @ContentChildren(ItemDirective, { descendants: true })
  items!: QueryList<ItemDirective>;

  @ViewChild('height') heightEle!: ElementRef<HTMLDivElement>;

  showList = true;
  private _active = false;
  private _elementRef = inject<ElementRef<any>>(ElementRef<any>);
  private _animationFrame: number | undefined;
  readonly listId = `cmdk-list-${cmdkListId++}`;
  _cdr = inject(ChangeDetectorRef);
  private _observer: ResizeObserver | undefined;

  get filteredItems() {
    return this.items?.filter((item) => item.filtered);
  }

  get active() {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
    this._cdr.markForCheck();
  }

  get filtered() {
    return this.filteredItems.length > 0;
  }

  @HostBinding('id')
  get id() {
    return this.listId;
  }

  @HostBinding('class.cmdk-list-active')
  get activeClass() {
    return this.active;
  }

  @HostBinding('attr.cmdk-hidden')
  get hidden() {
    return !this.showList;
  }

  ngAfterViewInit() {
    if (this.heightEle.nativeElement && this._elementRef.nativeElement) {
      const el = this.heightEle.nativeElement;
      const wrapper = this._elementRef.nativeElement;

      this._observer = new ResizeObserver(() => {
        this._animationFrame = requestAnimationFrame(() => {
          const height = el.getBoundingClientRect().height;
          wrapper.style.setProperty(
            `--cmdk-list-height`,
            height.toFixed(1) + 'px'
          );
          this._cdr.markForCheck();
        });
      });
      this._observer.observe(el);
    }
  }

  ngOnDestroy() {
    if (this._animationFrame !== undefined) {
      cancelAnimationFrame(this._animationFrame);
    }
    if (this._observer && this.heightEle.nativeElement) {
      this._observer.unobserve(this.heightEle.nativeElement);
    }
  }
}
