import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationInputComponent } from './notification/notification-input/notification-input.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { FormsModule } from '@angular/forms';
import { NotificationMainComponent } from './notification/notification-main/notification-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationInputComponent,
    NotificationListComponent,
    NotificationMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
