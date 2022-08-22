import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeMarcheComponent } from './ajouter-type-marche.component';

describe('AjouterTypeMarcheComponent', () => {
  let component: AjouterTypeMarcheComponent;
  let fixture: ComponentFixture<AjouterTypeMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypeMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
