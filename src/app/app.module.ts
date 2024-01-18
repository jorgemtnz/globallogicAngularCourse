import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationInputComponent } from './notification/notification-input/notification-input.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { FormsModule } from '@angular/forms';
import { NotificationMainComponent } from './notification/notification-main/notification-main.component';
import { PokemonSpeciesSearchComponent } from './pokemon/pokemon-species-search/pokemon-species-search.component';
import { PokemonSpecieDetailComponent } from './pokemon/pokemon-specie-detail/pokemon-specie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationInputComponent,
    NotificationListComponent,
    NotificationMainComponent,
    PokemonSpeciesSearchComponent,
    PokemonSpecieDetailComponent
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
