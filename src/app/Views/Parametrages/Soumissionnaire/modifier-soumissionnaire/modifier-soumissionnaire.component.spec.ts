import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSoumissionnaireComponent } from './modifier-soumissionnaire.component';

describe('ModifierSoumissionnaireComponent', () => {
  let component: ModifierSoumissionnaireComponent;
  let fixture: ComponentFixture<ModifierSoumissionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSoumissionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSoumissionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
