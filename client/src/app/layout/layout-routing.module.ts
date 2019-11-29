import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'prefix' },
        { path: '', component:LayoutComponent},
        { path: '', component:LayoutComponent},

        { path: 'projects', loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule) },
        { path: 'stacks', loadChildren: () => import('../stacks/stacks.module').then(m => m.StacksModule) },
        { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },

        



    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
function newFunction(): string {
  return 'projects';
}

