import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationOperateursComponent } from './consultation-operateurs.component';

describe('ConsultationOperateursComponent', () => {
  let component: ConsultationOperateursComponent;
  let fixture: ComponentFixture<ConsultationOperateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationOperateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationOperateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
