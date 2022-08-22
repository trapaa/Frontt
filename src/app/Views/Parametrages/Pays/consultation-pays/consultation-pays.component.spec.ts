import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationPaysComponent } from './consultation-pays.component';

describe('ConsultationPaysComponent', () => {
  let component: ConsultationPaysComponent;
  let fixture: ComponentFixture<ConsultationPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
