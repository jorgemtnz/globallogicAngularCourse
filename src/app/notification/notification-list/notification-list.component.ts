import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  @Input() message:string = "";

  list$: Observable<string[]> = EMPTY;

  constructor(private service: MessagesService) { }


  ngOnInit() {
    const result = this.service.getMessages();

    this.list$ = result;
  }
}
