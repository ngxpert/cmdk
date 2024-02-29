import { EmptyDirective } from './empty.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
@Component({
  template: ` <div [cmdkEmpty]="true">Testing Empty Directive</div> `,
  standalone: true,
})
class EmptyDirectiveComponent {}

describe('EmptyDirective', () => {
  let fixture: ComponentFixture<EmptyDirectiveComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyDirective, EmptyDirectiveComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(EmptyDirectiveComponent);

    fixture.detectChanges(); // initial binding
  });

  it('should have empty text', () => {
    const textContent = fixture.nativeElement.textContent;
    expect(textContent).toBe('Testing Empty Directive');
  });
});
