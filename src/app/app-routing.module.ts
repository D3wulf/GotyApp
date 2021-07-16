import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotyComponent } from './pages/goty/goty.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [

        {
          path:'inicio', component:IndexComponent
        },{
          path:'goty',component:GotyComponent
        },{
          path:'**',
          pathMatch:'full',
          redirectTo:'inicio'
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
