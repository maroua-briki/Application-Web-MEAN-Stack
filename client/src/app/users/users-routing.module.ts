import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {path: '',component: UsersComponent,
  children: [
    {path: 'list',component: UsersListComponent},
    {path:'add', component:AddUserComponent},
    {path:'edit/:id', component:EditUserComponent}

     
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
