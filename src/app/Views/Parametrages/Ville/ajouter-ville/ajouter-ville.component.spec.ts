import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVilleComponent } from './ajouter-ville.component';

describe('AjouterVilleComponent', () => {
  let component: AjouterVilleComponent;
  let fixture: ComponentFixture<AjouterVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
