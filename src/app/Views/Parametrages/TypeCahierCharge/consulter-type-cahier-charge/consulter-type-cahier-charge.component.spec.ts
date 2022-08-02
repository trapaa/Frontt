import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTypeCahierChargeComponent } from './consulter-type-cahier-charge.component';

describe('ConsulterTypeCahierChargeComponent', () => {
  let component: ConsulterTypeCahierChargeComponent;
  let fixture: ComponentFixture<ConsulterTypeCahierChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterTypeCahierChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterTypeCahierChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
