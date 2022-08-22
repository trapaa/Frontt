import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormeComponent } from './list-forme.component';

describe('ListFormeComponent', () => {
  let component: ListFormeComponent;
  let fixture: ComponentFixture<ListFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFormeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
