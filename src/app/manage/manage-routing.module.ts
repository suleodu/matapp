import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { SessionComponent } from './session/session.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent
  },
  {
    path: 'session',
    component: SessionComponent
  },
  {
    path: 'course',
    component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
