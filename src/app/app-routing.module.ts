import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ 
  path: 'componentesA',
   loadChildren: () => import('./componentes-a/componentes-a.module')
   .then(m => m.ComponentesAModule) 
  }, 
  { 
    path: 'componentesB', 
    loadChildren: () => import('./componentes-b/componentes-b.module')
    .then(m => m.ComponentesBModule) 
  },
{
  path:'',
  redirectTo:'',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
