import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeMarcheComponent } from './modifier-type-marche.component';

describe('ModifierTypeMarcheComponent', () => {
  let component: ModifierTypeMarcheComponent;
  let fixture: ComponentFixture<ModifierTypeMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTypeMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTypeMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
