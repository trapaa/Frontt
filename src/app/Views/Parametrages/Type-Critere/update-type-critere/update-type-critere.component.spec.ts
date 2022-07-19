import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeCritereComponent } from './update-type-critere.component';

describe('UpdateTypeCritereComponent', () => {
  let component: UpdateTypeCritereComponent;
  let fixture: ComponentFixture<UpdateTypeCritereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeCritereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
