import {
  Directive,
  HostBinding,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Directive({
  selector: '[cmdkEmpty]',
})
export class EmptyDirective {
  @Input() shouldChange = true;

  private _hasView = false;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}

  @HostBinding('class.cmdk-empty')
  get cmdkEmptyClass() {
    return true;
  }

  @Input() set cmdkEmpty(condition: boolean | string) {
    if (condition && !this._hasView) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this._hasView = true;
    } else if (!condition && this._hasView) {
      this._viewContainer.clear();
      this._hasView = false;
    }
  }
}
