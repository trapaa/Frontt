import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTypeMarcheComponent } from './consulter-type-marche.component';

describe('ConsulterTypeMarcheComponent', () => {
  let component: ConsulterTypeMarcheComponent;
  let fixture: ComponentFixture<ConsulterTypeMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterTypeMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterTypeMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
