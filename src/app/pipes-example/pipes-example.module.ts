import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesExampleRoutingModule } from './pipes-example-routing.module';
import { PipesExampleComponent } from './pipes-example.component';
import { TaskStatusPipePipe } from './pipes/task-status-pipe.pipe';
import { CompletedTaskDirective } from './directivas/completed-task-directive.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PipesExampleComponent,
    TaskStatusPipePipe,
    CompletedTaskDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesExampleRoutingModule
  ]
})
export class PipesExampleModule { }
