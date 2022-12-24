import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { ItemRoomComponent } from './item-room/item-room.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { RoomUserComponent } from './room-user/room-user.component';
import { WinnerUserComponent } from './winner-user/winner-user.component';
import { FormsModule } from '@angular/forms';
import { CreateCompetitorComponent } from './create-competitor/create-competitor.component';
import { CountdownTimerModule } from 'projects/countdown-timer/src/public-api';


@NgModule({
  declarations: [
    UserComponent,
    UserheaderComponent,
    ItemRoomComponent,
    HomeUserComponent,
    RoomUserComponent,
    WinnerUserComponent,
    CreateCompetitorComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    CountdownTimerModule
  ]
})
export class UserModule { }
