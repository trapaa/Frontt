import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGouverneratComponent } from './list-gouvernerat.component';

describe('ListGouverneratComponent', () => {
  let component: ListGouverneratComponent;
  let fixture: ComponentFixture<ListGouverneratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGouverneratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGouverneratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
