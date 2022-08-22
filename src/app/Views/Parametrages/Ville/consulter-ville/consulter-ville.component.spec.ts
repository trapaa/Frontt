import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterVilleComponent } from './consulter-ville.component';

describe('ConsulterVilleComponent', () => {
  let component: ConsulterVilleComponent;
  let fixture: ComponentFixture<ConsulterVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
