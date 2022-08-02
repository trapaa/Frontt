import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeCahierChargeComponent } from './ajouter-type-cahier-charge.component';

describe('AjouterTypeCahierChargeComponent', () => {
  let component: AjouterTypeCahierChargeComponent;
  let fixture: ComponentFixture<AjouterTypeCahierChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypeCahierChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeCahierChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
