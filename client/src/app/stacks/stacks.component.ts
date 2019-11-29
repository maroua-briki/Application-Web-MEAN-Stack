import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStackComponent } from './add-stack/add-stack.component';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddStackComponent,{
      width: '1000px ',disableClose: true 
    });
}


}
