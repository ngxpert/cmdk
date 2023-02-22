import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cmdkEmpty]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-empty',
  },
})
export class EmptyDirective {
  private _hasView = false;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}

  set cmdkEmpty(condition: boolean | string) {
    if (condition && !this._hasView) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this._hasView = true;
    } else if (!condition && this._hasView) {
      this._viewContainer.clear();
      this._hasView = false;
    }
  }
}
