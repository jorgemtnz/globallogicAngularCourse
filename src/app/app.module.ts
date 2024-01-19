import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationInputComponent } from './notification/notification-input/notification-input.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { FormsModule } from '@angular/forms';
import { NotificationMainComponent } from './notification/notification-main/notification-main.component';
import { PokemonSpeciesSearchComponent } from './pokemon/pokemon-species-search/pokemon-species-search.component';
import { SpinnerloaderComponent } from './shared/spinnerloader/spinnerloader.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './services/loading.interceptor';
import { CountingInterceptor } from './services/counting.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NotificationInputComponent,
    NotificationListComponent,
    NotificationMainComponent,
    PokemonSpeciesSearchComponent,   
    SpinnerloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
    multi:true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass:CountingInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
