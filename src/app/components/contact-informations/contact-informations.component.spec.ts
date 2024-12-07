import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationsComponent } from './contact-informations.component';

describe('ContactInformationsComponent', () => {
  let component: ContactInformationsComponent;
  let fixture: ComponentFixture<ContactInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactInformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
