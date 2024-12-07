import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationsEditComponent } from './contact-informations-edit.component';

describe('ContactInformationsEditComponent', () => {
  let component: ContactInformationsEditComponent;
  let fixture: ComponentFixture<ContactInformationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactInformationsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactInformationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
