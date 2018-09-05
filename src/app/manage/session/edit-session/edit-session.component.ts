import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PeriodicElement } from '../session.component';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditSessionComponent>,
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
