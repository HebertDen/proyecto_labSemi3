import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { UsersService } from 'src/app/services/users.service';
import { Subscription } from 'rxjs';
import { RoomClass } from 'src/app/classes/room.class';
import { UserClass } from 'src/app/classes/user.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-user',
  templateUrl: './room-user.component.html',
  styleUrls: ['./room-user.component.sass']
})
export class RoomUserComponent implements OnInit {

  roomSubscription: Subscription = new Subscription;
  public room = new RoomClass();

  userSubscription: Subscription = new Subscription;
  public user = new UserClass();

  public id: string = '';

  constructor(
    public roomsService: RoomsService,
    public usersService: UsersService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') || '';
    this.roomSubscription = this.roomsService.get$().subscribe((item: RoomClass) => {
      this.room = item;
    });
    this.roomsService
      .get(this.id)
      .subscribe();
    
  }

}
