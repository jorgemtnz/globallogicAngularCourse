import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesARoutingModule } from './componentes-a-routing.module';
import { ComponentesAComponent } from './componentes-a.component';
import { ProfileFormComponent } from '../profile/profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileFormComponent,
    ComponentesAComponent
  ],
  imports: [
    CommonModule,  
    ReactiveFormsModule,  
    ComponentesARoutingModule
  ]
})
export class ComponentesAModule { }
