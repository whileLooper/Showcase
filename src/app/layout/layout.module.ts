import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { ROUTES } from './layout.routes';
import { MdMenuModule, MdIconModule, MdButtonModule } from '@angular/material';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    ROUTES,
    FormsModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
  ]
})

export class LayoutModule {

}
