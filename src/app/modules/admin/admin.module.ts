import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { SectionadminComponent } from './sectionadmin/sectionadmin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ItemRoomComponent } from './item-room/item-room.component';
import { ItemWinnerComponent } from './item-winner/item-winner.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderadminComponent,
    SectionadminComponent,
    HomeAdminComponent,
    ItemRoomComponent,
    ItemWinnerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
