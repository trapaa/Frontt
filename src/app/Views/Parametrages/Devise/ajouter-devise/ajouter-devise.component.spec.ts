import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDeviseComponent } from './ajouter-devise.component';

describe('AjouterDeviseComponent', () => {
  let component: AjouterDeviseComponent;
  let fixture: ComponentFixture<AjouterDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
