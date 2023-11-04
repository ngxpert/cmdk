import { LoaderDirective } from './loader.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
@Component({
  template: ` <div [cmdkLoader]="true">Testing Loader Directive</div> `,
  standalone: true,
})
class LoaderDirectiveComponent {}

describe('LoaderDirective', () => {
  let fixture: ComponentFixture<LoaderDirectiveComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderDirective, LoaderDirectiveComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(LoaderDirectiveComponent);

    fixture.detectChanges(); // initial binding
  });

  it('should have loader text', () => {
    const textContent = fixture.nativeElement.textContent;
    expect(textContent).toBe('Testing Loader Directive');
  });
});
