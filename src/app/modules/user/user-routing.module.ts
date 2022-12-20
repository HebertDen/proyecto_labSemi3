import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';
import { RoomUserComponent } from './room-user/room-user.component';
import { WinnerUserComponent } from './winner-user/winner-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeUserComponent },
    //   { path: '/:id', component: HomeUserComponent },
      { path: 'room/:id', component: RoomUserComponent },
    //   { path: '/room/winner/:id', component: WinnerUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
