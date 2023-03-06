import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaycastComponent } from './raycast.component';

describe('RaycastComponent', () => {
  let component: RaycastComponent;
  let fixture: ComponentFixture<RaycastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaycastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaycastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
