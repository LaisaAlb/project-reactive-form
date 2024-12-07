import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationsContainerComponent } from './user-informations-container.component';

describe('UserInformationsContainerComponent', () => {
  let component: UserInformationsContainerComponent;
  let fixture: ComponentFixture<UserInformationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInformationsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInformationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
