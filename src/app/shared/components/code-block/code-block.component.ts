import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { CodeHighlightService } from '../../../core/services/code-highlight.service';
import { CopyComponent } from '../../../icons/copy/copy.component';
import { CopiedComponent } from '../../../icons/copied/copied.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-code-block',
    templateUrl: './code-block.component.html',
    styleUrls: ['./code-block.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        CopiedComponent,
        CopyComponent,
    ],
})
export class CodeBlockComponent implements OnChanges {
  @Input() language = 'typescript';
  @Input()
  containerClass!: string;
  @Input()
  snippet!: string;

  @ViewChild('code') codeTemplateRef!: ElementRef<HTMLElement>;
  copied = false;

  constructor(private codeHighlightService: CodeHighlightService) {}

  ngOnChanges(): void {
    if (this.codeTemplateRef && this.codeTemplateRef.nativeElement) {
      setTimeout(() => {
        this.codeHighlightService.highlightElement(
          this.codeTemplateRef.nativeElement
        );
      });
    }
  }

  async copySnippet() {
    try {
      await navigator.clipboard.writeText(this.snippet);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    } catch (e) {}
  }
}
