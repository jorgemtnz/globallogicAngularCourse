import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesAComponent } from './componentes-a.component';

const routes: Routes = [{ path: '', component: ComponentesAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesARoutingModule { }
