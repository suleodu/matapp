import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PeriodicElement } from '../session.component';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateSessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }



  save(): boolean {
    return true;
  }
}
