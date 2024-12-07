import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationsEditComponent } from './general-informations-edit.component';

describe('GeneralInformationsEditComponent', () => {
  let component: GeneralInformationsEditComponent;
  let fixture: ComponentFixture<GeneralInformationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInformationsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralInformationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
