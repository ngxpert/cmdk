import {
  Directive,
  HostBinding,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { takeWhile } from 'rxjs';
import { CmdkService } from '../../cmdk.service';

@UntilDestroy({ checkProperties: true })
@Directive({
  selector: '[cmdkEmpty]',
})
export class EmptyDirective implements OnInit {
  @Input() shouldChange = true;

  private _hasView = false;
  private _cmdkService = inject(CmdkService);

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}

  @HostBinding('class.cmdk-empty')
  get cmdkEmptyClass() {
    return true;
  }

  ngOnInit(): void {
    this._cmdkService.isEmpty$
      .pipe(takeWhile(() => !this.shouldChange))
      .subscribe((isEmpty) => (this.cmdkEmpty = isEmpty));
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
