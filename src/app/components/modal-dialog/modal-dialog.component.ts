

import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef}from '@angular/material/dialog';
import { Student } from 'src/app/models/students.model';



@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {

  name = new FormControl('')
  lastNameControl = new FormControl('')

  studentForm = new FormGroup({
    name: this.name,
    lastName: this.lastNameControl,
  })

  constructor( 
    private readonly dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student | null,
  ) {
    if (data) {
      this.studentForm.patchValue(data)
    }
  }

  close() {
    this.dialogRef.close()
  }

 
}
