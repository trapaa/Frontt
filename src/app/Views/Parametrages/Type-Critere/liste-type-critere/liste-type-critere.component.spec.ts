import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeCritereComponent } from './liste-type-critere.component';

describe('ListeTypeCritereComponent', () => {
  let component: ListeTypeCritereComponent;
  let fixture: ComponentFixture<ListeTypeCritereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTypeCritereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
