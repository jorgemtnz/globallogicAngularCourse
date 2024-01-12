import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationInputComponent } from './notification-input.component';

describe('NotificationInputComponent', () => {
  let component: NotificationInputComponent;
  let fixture: ComponentFixture<NotificationInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationInputComponent]
    });
    fixture = TestBed.createComponent(NotificationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

});
