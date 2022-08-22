import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFormeComponent } from './consulter-forme.component';

describe('ConsulterFormeComponent', () => {
  let component: ConsulterFormeComponent;
  let fixture: ComponentFixture<ConsulterFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFormeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
