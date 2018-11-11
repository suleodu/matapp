import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Session, SessionService } from '../../../model/session/session.service';
import { MatSnackBar } from '@angular/material';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {

  updateSessionForm = new FormGroup({
    sesname: new FormControl('', Validators.required),
    passmark: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<EditSessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Session,
    private sessionSevice: SessionService,
    public snackBar: MatSnackBar ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }



  save(): boolean {
    return true;
  }

}
