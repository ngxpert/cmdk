import { Component, Input } from '@angular/core';
import { CopyComponent } from '../../icons/copy/copy.component';
import { GithubComponent } from '../../icons/github/github.component';
import { CopiedComponent } from '../../icons/copied/copied.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-meta',
    templateUrl: './meta.component.html',
    standalone: true,
    imports: [
        NgIf,
        CopiedComponent,
        GithubComponent,
        CopyComponent,
    ],
})
export class MetaComponent {
  @Input() version: string | null = '0.0.1';
  copied = false;
  async copyInstall() {
    try {
      await navigator.clipboard.writeText(`ng add @ngneat/cmdk`);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    } catch (e) {}
  }
}
