import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsContainerComponent } from './buttons-container.component';

describe('ButtonsContainerComponent', () => {
  let component: ButtonsContainerComponent;
  let fixture: ComponentFixture<ButtonsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
