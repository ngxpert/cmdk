import {
  Directive,
  HostBinding,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CommandComponent } from '../../components/command/command.component';

@UntilDestroy({ checkProperties: true })
@Directive({
  selector: '[cmdkEmpty]',
})
export class EmptyDirective {
  @Input() shouldChange = true;

  private _hasView = false;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private cmdkCommand: CommandComponent
  ) {}

  @HostBinding('class.cmdk-empty')
  get cmdkEmptyClass() {
    return true;
  }

  @Input() set cmdkEmpty(condition: boolean | string) {
    if (this.cmdkCommand.shouldFilter && condition && !this._hasView) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this._hasView = true;
    } else if (!condition && this._hasView) {
      this._viewContainer.clear();
      this._hasView = false;
    }
  }
}
