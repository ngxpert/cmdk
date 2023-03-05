import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramerComponent } from './framer.component';

describe('FramerComponent', () => {
  let component: FramerComponent;
  let fixture: ComponentFixture<FramerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
