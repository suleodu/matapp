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
          MatButtonToggleModule} from '@angular/material';

import { CourseComponent } from './course/course.component';
import { CreateSessionComponent } from './session/create-session/create-session.component';
import { EditSessionComponent } from './session/edit-session/edit-session.component';
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
    MatGridListModule,
    ManageRoutingModule
  ],
  declarations: [ManageComponent, SessionComponent, CourseComponent, CreateSessionComponent, EditSessionComponent],
  entryComponents: [CreateSessionComponent, EditSessionComponent]
})
export class ManageModule { }
