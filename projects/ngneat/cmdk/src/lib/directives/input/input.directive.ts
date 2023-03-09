import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';
import { CmdkService } from '../../cmdk.service';

@Directive({
  selector: '[cmdkInput]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-input',
  },
})
export class InputDirective implements AfterViewInit, OnDestroy {
  @Input() updateOn: 'blur' | 'change' | 'input' = 'input';
  private _cmdkService = inject(CmdkService);
  private _elementRef = inject<ElementRef<HTMLInputElement>>(
    ElementRef<HTMLInputElement>
  );

  search(value: string) {
    this._cmdkService.setSearch(value);
  }

  ngAfterViewInit(): void {
    this._elementRef.nativeElement.addEventListener(this.updateOn, (ev) =>
      this.search((ev.target as HTMLInputElement).value)
    );
  }

  ngOnDestroy(): void {
    this._elementRef.nativeElement.removeAllListeners &&
      this._elementRef.nativeElement.removeAllListeners(this.updateOn);
  }
}
