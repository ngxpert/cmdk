import {
  Directive,
  inject,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[cmdkEmpty]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-empty',
  },
})
export class EmptyDirective {
  private _hasView = false;
  private _templateRef = inject(TemplateRef<any>);
  private _viewContainer = inject(ViewContainerRef);
  private _renderer2 = inject(Renderer2);

  set cmdkEmpty(condition: boolean | string) {
    if (condition && !this._hasView) {
      const emb = this._viewContainer.createEmbeddedView(this._templateRef);
      this._renderer2.addClass(emb.rootNodes[0], 'cmdk-empty');
      this._hasView = true;
    } else if (!condition && this._hasView) {
      this._viewContainer.clear();
      this._hasView = false;
    }
  }
}
