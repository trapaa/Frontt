import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPaysComponent } from './ajouter-pays.component';

describe('AjouterPaysComponent', () => {
  let component: AjouterPaysComponent;
  let fixture: ComponentFixture<AjouterPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
