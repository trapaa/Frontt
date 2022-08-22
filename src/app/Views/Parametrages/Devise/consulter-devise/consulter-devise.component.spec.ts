import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDeviseComponent } from './consulter-devise.component';

describe('ConsulterDeviseComponent', () => {
  let component: ConsulterDeviseComponent;
  let fixture: ComponentFixture<ConsulterDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterDeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
