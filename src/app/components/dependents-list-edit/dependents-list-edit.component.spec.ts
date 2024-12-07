import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsListEditComponent } from './dependents-list-edit.component';

describe('DependentsListEditComponent', () => {
  let component: DependentsListEditComponent;
  let fixture: ComponentFixture<DependentsListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependentsListEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependentsListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
