import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { SessionComponent } from './session/session.component';

import { MatCardModule,
          MatTableModule,
          MatMenuModule,
          MatButtonModule,
          MatDialogModule,
          MatInputModule,
          MatFormFieldModule,
          MatSelectModule,
          MatGridListModule,
          MatIconModule,
          MatButtonToggleModule,
          MatSnackBarModule,
          MatPaginatorModule,
          MatSortModule,
          MatProgressSpinnerModule} from '@angular/material';

import { CourseComponent } from './course/course.component';
import { CreateSessionComponent } from './session/create-session/create-session.component';
import { EditSessionComponent } from './session/edit-session/edit-session.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatGridListModule,
    ManageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ManageComponent,
    SessionComponent,
    CourseComponent,
    CreateSessionComponent,
    EditSessionComponent,
    DashboardComponent,
    CreateCourseComponent,
    EditCourseComponent,
    UserComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  entryComponents: [
    CreateSessionComponent,
    EditSessionComponent,
    CreateCourseComponent,
    EditCourseComponent,
    CreateUserComponent,
    EditUserComponent
  ]
})
export class ManageModule {}
