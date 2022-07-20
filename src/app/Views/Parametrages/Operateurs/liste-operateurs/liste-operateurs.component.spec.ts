import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOperateursComponent } from './liste-operateurs.component';

describe('ListeOperateursComponent', () => {
  let component: ListeOperateursComponent;
  let fixture: ComponentFixture<ListeOperateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOperateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOperateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
