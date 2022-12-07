import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SectionloginComponent } from './sectionlogin/sectionlogin.component';


@NgModule({
  declarations: [
    LoginComponent,
    SectionloginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
