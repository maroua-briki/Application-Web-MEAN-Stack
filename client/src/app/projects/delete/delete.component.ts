import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  
constructor(private fb: FormBuilder,
  private dialog: MatDialog,
                private dialogRef: MatDialogRef<DeleteComponent>) {} // Closing dialog window
  
  public cancel(): void { // To cancel the dialog window
  this.dialogRef.close();
  }
  
  public cancelN(): void { 
      this.dialog.closeAll();
  }
  
}
