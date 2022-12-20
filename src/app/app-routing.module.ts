import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(h => h.HomeModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(adm => adm.AdminModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(usr => usr.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
