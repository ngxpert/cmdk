import { InputDirective } from './input.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
@Component({
  template: ` <input cmdkInput />`,
  standalone: true,
})
class InputDirectiveComponent {}

describe('InputDirective', () => {
  let fixture: ComponentFixture<InputDirectiveComponent>;
  let component: InputDirectiveComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDirective, InputDirectiveComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(InputDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // initial binding
  });

  it('should exist', () => {
    expect(component).toBeDefined();
  });
});
