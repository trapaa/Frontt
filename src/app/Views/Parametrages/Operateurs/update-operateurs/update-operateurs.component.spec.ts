import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOperateursComponent } from './update-operateurs.component';

describe('UpdateOperateursComponent', () => {
  let component: UpdateOperateursComponent;
  let fixture: ComponentFixture<UpdateOperateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOperateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOperateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
