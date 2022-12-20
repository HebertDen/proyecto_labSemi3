import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ItemRoomComponent } from './item-room/item-room.component';
import { ItemWinnerComponent } from './item-winner/item-winner.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderadminComponent,
    HomeAdminComponent,
    ItemRoomComponent,
    ItemWinnerComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    DeleteRoomComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
