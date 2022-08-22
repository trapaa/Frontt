import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterGouverneratComponent } from './consulter-gouvernerat.component';

describe('ConsulterGouverneratComponent', () => {
  let component: ConsulterGouverneratComponent;
  let fixture: ComponentFixture<ConsulterGouverneratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterGouverneratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterGouverneratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
