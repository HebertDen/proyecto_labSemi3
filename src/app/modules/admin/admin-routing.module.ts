import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: HomeAdminComponent },
      { path: 'crear', component: CreateRoomComponent },
      { path: 'update/:id', component: UpdateRoomComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
