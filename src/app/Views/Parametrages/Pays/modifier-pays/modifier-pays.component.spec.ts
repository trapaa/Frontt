import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPaysComponent } from './modifier-pays.component';

describe('ModifierPaysComponent', () => {
  let component: ModifierPaysComponent;
  let fixture: ComponentFixture<ModifierPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
