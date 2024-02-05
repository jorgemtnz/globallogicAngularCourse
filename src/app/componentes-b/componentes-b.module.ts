import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesBRoutingModule } from './componentes-b-routing.module';
import { ComponentesBComponent } from './componentes-b.component';
import { NotificationInputComponent } from '../notification/notification-input/notification-input.component';
import { NotificationListComponent } from '../notification/notification-list/notification-list.component';
import { NotificationMainComponent } from '../notification/notification-main/notification-main.component';
import { FormsModule } from '@angular/forms';
import { PokemonSpeciesSearchComponent } from '../pokemon/pokemon-species-search/pokemon-species-search.component';



@NgModule({
  declarations: [
    NotificationInputComponent,
    NotificationListComponent,
    NotificationMainComponent,    
    PokemonSpeciesSearchComponent,  
    ComponentesBComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentesBRoutingModule
  ]
})
export class ComponentesBModule { }
