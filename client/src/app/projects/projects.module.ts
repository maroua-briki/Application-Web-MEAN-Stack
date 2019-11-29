import { NgModule } from '@angular/core';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsComponent } from './projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AzureService } from '../shared/services/azure.service';
import { AzureInfoComponent } from './azure-info/azure-info.component';
import { MaterialModule } from '../shared/material/material.module';
import { DeleteComponent } from './delete/delete.component';
import { AwsInfoComponent } from './aws-info/aws-info.component';




@NgModule({
  declarations: 
  [ 
    PageHeaderComponent, 
    ProjectsComponent, 
    AddProjectComponent,
    AzureInfoComponent, 
    DeleteComponent, 
    ProjectsListComponent, 
    AwsInfoComponent
  ],
  entryComponents:[DeleteComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AzureInfoComponent,
    ProjectsComponent,
    ProjectsListComponent
    
  ],
  providers: [AzureService],

})
export class ProjectsModule { }
