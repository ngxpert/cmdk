import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercelComponent } from './vercel.component';

describe('VercelComponent', () => {
  let component: VercelComponent;
  let fixture: ComponentFixture<VercelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VercelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
