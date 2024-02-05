import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesARoutingModule } from './componentes-a-routing.module';
import { ComponentesAComponent } from './componentes-a.component';
import { ProfileFormComponent } from '../profile/profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '../_forms/text-input/text-input.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    ProfileFormComponent,
    TextInputComponent,
    PhotoEditorComponent,
    ComponentesAComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,  
    ReactiveFormsModule,  
    //SharedComponentsModule,
    ComponentesARoutingModule
  ]
})
export class ComponentesAModule { }
