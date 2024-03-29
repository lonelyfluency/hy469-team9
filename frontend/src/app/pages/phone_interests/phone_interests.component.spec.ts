import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInterestsComponent } from './phone_interests.component';

describe('PhoneInterestsComponent', () => {
  let component: PhoneInterestsComponent;
  let fixture: ComponentFixture<PhoneInterestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneInterestsComponent]
    });
    fixture = TestBed.createComponent(PhoneInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
