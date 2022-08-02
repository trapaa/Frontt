import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeCahierChargeComponent } from './liste-type-cahier-charge.component';

describe('ListeTypeCahierChargeComponent', () => {
  let component: ListeTypeCahierChargeComponent;
  let fixture: ComponentFixture<ListeTypeCahierChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTypeCahierChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeCahierChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
