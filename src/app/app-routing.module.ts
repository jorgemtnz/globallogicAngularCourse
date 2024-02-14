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
},
  { path: 'sharedComponets', loadChildren: () => import('./shared-components/shared-components.module').then(m => m.SharedComponentsModule) },
  { path: 'pipesExampleMain', loadChildren: () => import('./pipes-example/pipes-example.module').then(m => m.PipesExampleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
