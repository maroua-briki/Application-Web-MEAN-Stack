import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutingModule } from './designer-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolsPaletteComponent } from './tools-palette/tools-palette.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ToolsPaletteComponent],
  imports: [
    CommonModule,
    DesignerRoutingModule
  ]
})
export class DesignerModule { }
