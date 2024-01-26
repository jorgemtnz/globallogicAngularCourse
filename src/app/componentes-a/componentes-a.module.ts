import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesARoutingModule } from './componentes-a-routing.module';
import { ComponentesAComponent } from './componentes-a.component';


@NgModule({
  declarations: [
    ComponentesAComponent
  ],
  imports: [
    CommonModule,
    ComponentesARoutingModule
  ]
})
export class ComponentesAModule { }
