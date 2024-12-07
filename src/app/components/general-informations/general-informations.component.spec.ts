import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationsComponent } from './general-informations.component';

describe('GeneralInformationsComponent', () => {
  let component: GeneralInformationsComponent;
  let fixture: ComponentFixture<GeneralInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
