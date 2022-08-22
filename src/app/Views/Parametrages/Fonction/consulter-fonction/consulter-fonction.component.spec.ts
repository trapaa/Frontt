import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFonctionComponent } from './consulter-fonction.component';

describe('ConsulterFonctionComponent', () => {
  let component: ConsulterFonctionComponent;
  let fixture: ComponentFixture<ConsulterFonctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFonctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
