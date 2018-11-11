import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'main2',
    loadChildren: '../app/main2/main2.module#Main2Module'
  },
  {
    path: 'auth',
    loadChildren: '../app/auth/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: 'main2/setup',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
