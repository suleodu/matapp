import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../model/user/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = [
    'userid', 'fname', 'lname',
    'mname', 'email', 'progid',
    'access', 'is_login', 'status',
    'created_at', 'updated_at', 'actions'
  ];
  userData: User[];
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      (result: any[]) => {
        console.log('success', result);
        this.userData = result;
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '500px', height: '510px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openEditSessionDialog(param: any): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '500px', height: '510px',
      data: param
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
