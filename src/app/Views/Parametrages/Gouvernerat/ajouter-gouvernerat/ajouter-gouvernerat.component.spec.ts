import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGouverneratComponent } from './ajouter-gouvernerat.component';

describe('AjouterGouverneratComponent', () => {
  let component: AjouterGouverneratComponent;
  let fixture: ComponentFixture<AjouterGouverneratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGouverneratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGouverneratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
