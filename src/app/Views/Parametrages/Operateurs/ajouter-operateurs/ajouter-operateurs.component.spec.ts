import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOperateursComponent } from './ajouter-operateurs.component';

describe('AjouterOperateursComponent', () => {
  let component: AjouterOperateursComponent;
  let fixture: ComponentFixture<AjouterOperateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterOperateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterOperateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
