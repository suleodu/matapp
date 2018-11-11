import { Component, OnInit } from '@angular/core';
import { MatIcon, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CourseService, Course } from '../../model/course/course.service';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  displayedColumns: string[] = ['csid', 'csname', 'status', 'actions'];
  DataSource: Course[];

  constructor(public courseService: CourseService, public dialog: MatDialog) {}

  ngOnInit() {
    this.DataSource = this.courseService.getAllCourses();
  }

  openCreateCourseDialog(): void {
    const dialogRef = this.dialog.open(CreateCourseComponent, {
      width: '250px',
      height: '330px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditCourseDialog(param: Course): void {
    const dialogRef = this.dialog.open(EditCourseComponent, {
      width: '250px',
      height: '330px',
      data: param
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
