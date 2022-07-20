import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationOperationComponent } from './consultation-operation.component';

describe('ConsultationOperationComponent', () => {
  let component: ConsultationOperationComponent;
  let fixture: ComponentFixture<ConsultationOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
