import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesExampleRoutingModule } from './pipes-example-routing.module';
import { PipesExampleComponent } from './pipes-example.component';
import { TaskStatusPipePipe } from './pipes/task-status-pipe.pipe';
import { CompletedTaskDirectiveDirective } from './directivas/completed-task-directive.directive';
import { TaskFormComponent } from './task-form/task-form.component';


@NgModule({
  declarations: [
    PipesExampleComponent,
    TaskStatusPipePipe,
    CompletedTaskDirectiveDirective,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    PipesExampleRoutingModule
  ]
})
export class PipesExampleModule { }
