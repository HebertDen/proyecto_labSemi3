import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AdminClass } from 'src/app/classes/admin.class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  // Admin
  adminSubscription: Subscription = new Subscription;
  public admin = new AdminClass();
  id: string = '1';

  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit(): void {

    // Admin
    this.adminSubscription = this.adminService.get$().subscribe((admon: AdminClass) => {
      this.admin = admon
    });
    this.adminService
      .get(this.id)
      .subscribe();
  }
}
