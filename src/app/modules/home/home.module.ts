import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { SectionhomeComponent } from './sectionhome/sectionhome.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderhomeComponent,
    SectionhomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
