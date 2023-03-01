import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  pages: Array<string> = [];
  search = '';
  items: Array<string> = [];
  loading = false;

  @ViewChild('dialog')
  dialog!: ElementRef<HTMLDialogElement>;

  private document = inject(DOCUMENT);
  value = '';

  ngAfterViewInit() {
    this.document.addEventListener('keydown', (ev) =>
      this.onDocumentKeyDown(ev)
    );
  }

  onDocumentKeyDown(ev: KeyboardEvent) {
    if (
      !this.dialog.nativeElement.open &&
      ev.key === 'k' &&
      (ev.metaKey || ev.ctrlKey)
    ) {
      ev.preventDefault();
      this.dialog.nativeElement.showModal();
    }
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }

  filter(value: string, search: string) {
    return value === search;
  }

  valueChanged(ev: string) {
    this.value = ev;
  }

  getItemContext(item: any) {
    return { $implicit: item };
  }

  get page() {
    return this.pages[this.pages.length - 1];
  }

  onKeyDown(e: KeyboardEvent) {
    // Escape goes to previous page
    // Backspace goes to previous page when search is empty
    if (e.key === 'Escape' || (e.key === 'Backspace' && !this.search)) {
      e.preventDefault();
      this.pages = this.pages.slice(0, -1);
    }
  }

  setSearch(ev: Event) {
    this.search = (ev.target as HTMLInputElement)?.value;
  }

  setPages(page: string) {
    this.pages.push(page);
  }

  getItems() {
    this.loading = true;
    setTimeout(() => {
      this.items = ['A', 'B', 'C', 'D'];
      this.loading = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    this.document.removeEventListener('keydown', (ev) =>
      this.onDocumentKeyDown(ev)
    );
  }
}
