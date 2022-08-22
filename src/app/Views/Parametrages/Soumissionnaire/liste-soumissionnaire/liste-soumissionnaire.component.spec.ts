import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSoumissionnaireComponent } from './liste-soumissionnaire.component';

describe('ListeSoumissionnaireComponent', () => {
  let component: ListeSoumissionnaireComponent;
  let fixture: ComponentFixture<ListeSoumissionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSoumissionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSoumissionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
