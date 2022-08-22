import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDeviseComponent } from './modifier-devise.component';

describe('ModifierDeviseComponent', () => {
  let component: ModifierDeviseComponent;
  let fixture: ComponentFixture<ModifierDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
