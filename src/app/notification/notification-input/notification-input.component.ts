import { Component, EventEmitter, Output } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-notification-input',
  templateUrl: './notification-input.component.html',
  styleUrls: ['./notification-input.component.css']
})
export class NotificationInputComponent {
  @Output() messageToAdd = new EventEmitter<string>();

  message: string = "";

  constructor(private service: MessagesService) { }

  addNotification() {
    this.messageToAdd.emit(this.message);
    this.service.addElement(this.message);
    this.clearInput();
  }

  deleteLastElement(){
    this.service.deleteLastElement(this.message);
  }

  clearInput(){
    this.message="";
  }

}
