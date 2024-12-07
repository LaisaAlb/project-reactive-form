import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListEditComponent } from './phone-list-edit.component';

describe('PhoneListEditComponent', () => {
  let component: PhoneListEditComponent;
  let fixture: ComponentFixture<PhoneListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneListEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
