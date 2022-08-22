import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierGouverneratComponent } from './modifier-gouvernerat.component';

describe('ModifierGouverneratComponent', () => {
  let component: ModifierGouverneratComponent;
  let fixture: ComponentFixture<ModifierGouverneratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierGouverneratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierGouverneratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
