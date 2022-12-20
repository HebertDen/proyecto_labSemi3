import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { ItemRoomComponent } from './item-room/item-room.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { RoomUserComponent } from './room-user/room-user.component';
import { WinnerUserComponent } from './winner-user/winner-user.component';
import { NavigateUserComponent } from './navigate-user/navigate-user.component';


@NgModule({
  declarations: [
    UserComponent,
    UserheaderComponent,
    ItemRoomComponent,
    HomeUserComponent,
    RoomUserComponent,
    WinnerUserComponent,
    NavigateUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
