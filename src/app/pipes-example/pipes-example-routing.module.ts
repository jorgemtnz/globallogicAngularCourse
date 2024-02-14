import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesExampleComponent } from './pipes-example.component';

const routes: Routes = [{ path: '', component: PipesExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesExampleRoutingModule { }
