import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '../_forms/text-input/text-input.component';


@NgModule({
  declarations: [
   // TextInputComponent
  ],
  //providers: [TextInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedComponentsModule { }
