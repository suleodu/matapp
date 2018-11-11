import { Component, OnInit, Inject, Input, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Session, SessionService } from '../../../model/session/session.service';
import { MatSnackBar } from '@angular/material';

import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})

export class CreateSessionComponent implements OnInit {
  onAdd = new EventEmitter();
  constructor(public dialogRef: MatDialogRef<CreateSessionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Session,
              private sessionSevice: SessionService,
              public snackBar: MatSnackBar,
              public route: Router) { }


  createSessionForm = new FormGroup({
    sesname: new FormControl('', Validators.required),
    passmark: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    const data = this.createSessionForm.value;
    this.sessionSevice.AddSession(data).subscribe(
      session => {
        console.log(`Session $session.sesname is added`);
        this.snackBar.open(`Session ${data.sesname} is added successfuly`, '', { duration: 2000 });
        this.onAdd.emit('test');
      }
    );

    this.onNoClick();
  }
}
