import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatDialogModule,
    Material.MatTableModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    NgMaterialMultilevelMenuModule

  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatDialogModule,
    Material.MatTableModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    NgMaterialMultilevelMenuModule



  ]
})
export class MaterialModule { }
