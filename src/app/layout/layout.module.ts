import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { ROUTES } from './layout.routes';
import { MdMenuModule, MdIconModule, MdButtonModule } from '@angular/material';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

// firebaseConfig setting
// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCRuMOJXpbDrQotYP6-anTRL7ZqUqNzqJE',
  authDomain: 'showcase-6ed34.firebaseapp.com',
  databaseURL: 'https://showcase-6ed34.firebaseio.com',
  storageBucket: 'showcase-6ed34.appspot.com',
  messagingSenderId: '54277616723'
};

@NgModule({
  imports: [
    CommonModule,
    ROUTES,
    FormsModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
  ]
})

export class LayoutModule {

}
