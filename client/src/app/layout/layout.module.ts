import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsModule } from '../projects/projects.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [LayoutComponent, SidebarComponent, FooterComponent, NavbarComponent, TestComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    ProjectsModule,
    // StacksModule
  ],


})
export class LayoutModule { }
