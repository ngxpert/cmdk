import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SubCommandDialogComponent } from '../sub-command-dialog/sub-command-dialog.component';
import { CdkOverlayOrigin, CdkConnectedOverlay } from '@angular/cdk/overlay';

@Component({
    selector: 'app-sub-command',
    templateUrl: './sub-command.component.html',
    styleUrls: ['./sub-command.component.scss'],
    standalone: true,
    imports: [
        CdkOverlayOrigin,
        CdkConnectedOverlay,
        SubCommandDialogComponent,
    ],
})
export class SubCommandComponent implements OnInit, OnDestroy {
  @Input() value: string = '';
  isDialogOpen = false;

  listener(e: KeyboardEvent) {
    if (e.key === 'k' && (e.metaKey || e.altKey)) {
      e.preventDefault();
      if (this.isDialogOpen) {
        this.isDialogOpen = false;
      } else {
        this.isDialogOpen = true;
      }
    }
  }

  ngOnInit() {
    document.addEventListener('keydown', (ev) => this.listener(ev));
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', (ev) => this.listener(ev));
  }
}
