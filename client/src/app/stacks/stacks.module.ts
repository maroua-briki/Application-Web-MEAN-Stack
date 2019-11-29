import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StacksRoutingModule } from './stacks-routing.module';
import { StacksComponent } from './stacks.component';
import { StacksListComponent } from './stacks-list/stacks-list.component';
import { AddStackComponent } from './add-stack/add-stack.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [StacksComponent, StacksListComponent, AddStackComponent, DeleteComponent],
  imports: [
    CommonModule,
    StacksRoutingModule,
    MaterialModule,
  ReactiveFormsModule,
  FormsModule
]
})
export class StacksModule { }
