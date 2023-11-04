import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';
import { CmdkService } from '../../cmdk.service';
import { CmdkInputProps } from '../../types';

@Directive({
    selector: 'input[cmdkInput]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'cmdk-input',
    },
    standalone: true,
})
export class InputDirective
  implements AfterViewInit, OnDestroy, CmdkInputProps
{
  @Input() updateOn: 'blur' | 'change' | 'input' = 'input';
  @Input()
  set value(value: string) {
    this.search(value);
  }
  private _cmdkService = inject(CmdkService);
  private _elementRef = inject<ElementRef<any>>(ElementRef<HTMLInputElement>);

  search(value: string) {
    this._cmdkService.setSearch(value);
  }

  ngAfterViewInit(): void {
    this._elementRef.nativeElement.addEventListener(
      this.updateOn,
      (ev: Event) => this.search((ev.target as HTMLInputElement).value)
    );
  }

  ngOnDestroy(): void {
    this._elementRef.nativeElement.removeAllListeners &&
      this._elementRef.nativeElement.removeAllListeners(this.updateOn);
  }
}
