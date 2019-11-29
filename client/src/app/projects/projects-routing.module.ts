import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AzureInfoComponent } from './azure-info/azure-info.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AwsInfoComponent } from './aws-info/aws-info.component';


const routes: Routes = [
  {path: '',component: ProjectsComponent,
    children: [
      {path: 'list',component: ProjectsListComponent},
      {path:'azure', component:AzureInfoComponent},
      {path:'add-project', component:AddProjectComponent},
      {path:'aws', component:AwsInfoComponent}
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
