import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-main',
  templateUrl: './notification-main.component.html',
  styleUrls: ['./notification-main.component.css']
})
export class NotificationMainComponent {
  title = 'AppNotif';
  message: string = "";

  onMessageToAdd(value: string) {
    this.message = value;
  }
}
