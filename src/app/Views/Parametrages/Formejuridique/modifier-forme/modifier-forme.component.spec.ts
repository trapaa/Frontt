import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormeComponent } from './modifier-forme.component';

describe('ModifierFormeComponent', () => {
  let component: ModifierFormeComponent;
  let fixture: ComponentFixture<ModifierFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFormeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
