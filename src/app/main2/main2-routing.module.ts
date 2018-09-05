import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Main2Component } from './main2.component';


const routes: Routes = [
  {
    path: '',
    component: Main2Component,
    children: [
      {
        path: 'setup',
        loadChildren: '../../app/manage/manage.module#ManageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Main2RoutingModule { }
