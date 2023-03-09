import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  inject,
} from '@angular/core';

/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
@Component({
  selector: 'cmdk-separator',
  templateUrl: './separator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-separator',
  },
})
export class SeparatorComponent {
  showSeparator = true;
  public cdr = inject(ChangeDetectorRef);

  @HostBinding('attr.cmdk-hidden')
  get hidden() {
    return !this.showSeparator;
  }
}
