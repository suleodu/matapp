import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { SessionService, Session } from '../../model/session/session.service';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})


export class SessionComponent implements OnInit {

  dataSource = new SessionDataSource(this.sessionService);
  displayedColumns: string[] = ['sesname', 'passmark', 'status',  'actions'];
  sessionData: Session[];

  constructor(private sessionService: SessionService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.load();
  }

  openCreateSessionDialog(): void {
    const dialogRef = this.dialog.open(CreateSessionComponent, {
      width: '250px', height: '340px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.load();
    });
  }


  openEditSessionDialog(param: Session): void {
    const dialogRef = this.dialog.open(EditSessionComponent, {
      width: '250px', height: '330px',
      data: param
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  delete(param: Session): boolean {
    if (confirm(`Are you sure you want to delete ${param.sesname}`)) {
      return true;
    }
    return false;
  }


  private load() {
    this.sessionService.getAllSession().subscribe(
      (result: Session[]) => {
        console.log('success', result);
        this.sessionData = result;
        this.snackBar.open('Session Loaded', '', {
          duration: 2000
        });
      },
      (error: any) => {
        console.log('error', error);
        this.snackBar.open(error.message, '', {
          duration: 2000
        });
      }
    );
  }

}


export class SessionDataSource extends DataSource<Session> {

  constructor(private sessionService: SessionService) {
    super();
  }
  connect(): Observable<Session[]> {
    return this.sessionService.getAllSession();
  }
  disconnect() {}
}
