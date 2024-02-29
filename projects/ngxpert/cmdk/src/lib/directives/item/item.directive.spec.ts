import { ItemDirective } from './item.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
@Component({
  template: ` <div cmdkItem></div>`,
  standalone: true,
})
class ItemDirectiveComponent {}

describe('ItemDirective', () => {
  let fixture: ComponentFixture<ItemDirectiveComponent>;
  let component: ItemDirectiveComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDirective, ItemDirectiveComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ItemDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // initial binding
  });

  it('should exist', () => {
    expect(component).toBeDefined();
  });
});
