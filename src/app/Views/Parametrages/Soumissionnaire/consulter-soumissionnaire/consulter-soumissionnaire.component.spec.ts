import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterSoumissionnaireComponent } from './consulter-soumissionnaire.component';

describe('ConsulterSoumissionnaireComponent', () => {
  let component: ConsulterSoumissionnaireComponent;
  let fixture: ComponentFixture<ConsulterSoumissionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterSoumissionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterSoumissionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
