import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cmdkListItem]',
})
export class ListItemDirective {
  constructor(public _elementRef: ElementRef<HTMLLIElement>) {}
}
