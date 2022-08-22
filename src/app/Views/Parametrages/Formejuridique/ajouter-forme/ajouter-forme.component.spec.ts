import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormeComponent } from './ajouter-forme.component';

describe('AjouterFormeComponent', () => {
  let component: AjouterFormeComponent;
  let fixture: ComponentFixture<AjouterFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFormeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
