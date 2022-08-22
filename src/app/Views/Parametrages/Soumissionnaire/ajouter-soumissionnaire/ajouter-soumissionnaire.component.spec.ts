import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSoumissionnaireComponent } from './ajouter-soumissionnaire.component';

describe('AjouterSoumissionnaireComponent', () => {
  let component: AjouterSoumissionnaireComponent;
  let fixture: ComponentFixture<AjouterSoumissionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSoumissionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSoumissionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
