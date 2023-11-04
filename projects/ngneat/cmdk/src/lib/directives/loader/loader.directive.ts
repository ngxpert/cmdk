import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[cmdkLoader]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-loader',
  },
  standalone: true,
})
export class LoaderDirective {
  private _hasView = false;
  private _templateRef = inject(TemplateRef);
  private _viewContainer = inject(ViewContainerRef);

  set cmdkLoader(condition: boolean | undefined) {
    if (condition && !this._hasView) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this._hasView = true;
    } else if (!condition && this._hasView) {
      this._viewContainer.clear();
      this._hasView = false;
    }
  }
}
