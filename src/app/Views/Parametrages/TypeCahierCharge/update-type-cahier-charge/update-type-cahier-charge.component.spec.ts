import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeCahierChargeComponent } from './update-type-cahier-charge.component';

describe('UpdateTypeCahierChargeComponent', () => {
  let component: UpdateTypeCahierChargeComponent;
  let fixture: ComponentFixture<UpdateTypeCahierChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeCahierChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeCahierChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
