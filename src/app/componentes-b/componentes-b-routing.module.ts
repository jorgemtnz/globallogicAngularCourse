import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesBComponent } from './componentes-b.component';

const routes: Routes = [{ path: '', component: ComponentesBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesBRoutingModule { }
