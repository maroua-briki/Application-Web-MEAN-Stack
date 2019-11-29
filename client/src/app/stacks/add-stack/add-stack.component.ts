import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DeleteComponent } from 'src/app/projects/delete/delete.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-stack',
  templateUrl: './add-stack.component.html',
  styleUrls: ['./add-stack.component.scss']
})
export class AddStackComponent implements OnInit {
  
 
  selected = 'option2';
  addStack: FormGroup;
  public breakpoint: number; 
  wasFormChanged = false;

  constructor(private _formBuilder:FormBuilder, public dialog: MatDialog) { 
    this.addStack=this._formBuilder.group({
      'name': ['',Validators.required],
      'stackType':['',Validators.required],
      'description': ['',Validators.required]
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 1; // Breakpoint observer code

  }

  ngOnInit() {
  }

  
  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 1;
  }

  public onAdd(): void {
    this.markAsDirty(this.addStack);
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    if(this.addStack.dirty) {
      const dialogRef = this.dialog.open(DeleteComponent, {
        width: '50px',
      });
    } else {
      this.dialog.closeAll();
    }
  }


  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

}
 
