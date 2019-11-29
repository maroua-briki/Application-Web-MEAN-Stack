import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StacksComponent } from './stacks.component';
import { StacksListComponent } from './stacks-list/stacks-list.component';
import { AddStackComponent } from './add-stack/add-stack.component';


const routes: Routes = [
  {path: '',component: StacksComponent,
    children: [
      {path: 'list',component: StacksListComponent},
      {path:'add', component:AddStackComponent},
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StacksRoutingModule { }
