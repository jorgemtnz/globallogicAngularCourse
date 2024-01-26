import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesBRoutingModule } from './componentes-b-routing.module';
import { ComponentesBComponent } from './componentes-b.component';


@NgModule({
  declarations: [
    ComponentesBComponent
  ],
  imports: [
    CommonModule,
    ComponentesBRoutingModule
  ]
})
export class ComponentesBModule { }
