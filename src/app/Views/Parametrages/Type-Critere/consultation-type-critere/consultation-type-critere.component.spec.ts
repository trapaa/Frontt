import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationTypeCritereComponent } from './consultation-type-critere.component';

describe('ConsultationTypeCritereComponent', () => {
  let component: ConsultationTypeCritereComponent;
  let fixture: ComponentFixture<ConsultationTypeCritereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationTypeCritereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationTypeCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
