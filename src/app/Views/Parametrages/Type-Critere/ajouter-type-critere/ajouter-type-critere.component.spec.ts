import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeCritereComponent } from './ajouter-type-critere.component';

describe('AjouterTypeCritereComponent', () => {
  let component: AjouterTypeCritereComponent;
  let fixture: ComponentFixture<AjouterTypeCritereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypeCritereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
