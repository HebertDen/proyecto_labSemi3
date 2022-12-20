import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomClass } from 'src/app/classes/room.class';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.sass']
})
export class UpdateRoomComponent implements OnInit {

  roomSubscription: Subscription = new Subscription; 
  public room = new RoomClass();
  public room2 = new RoomClass();
  public id: string = '';

  constructor(
    public roomsService: RoomsService,
    private router: ActivatedRoute
  ) { }

   ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') || '';
    this.roomSubscription = this.roomsService.get$().subscribe((item: RoomClass) => {
      this.room = item;
      this.room2 = this.room;
    });
    this.roomsService
      .get(this.id)
      .subscribe();
  }

  onUpdate() {
    console.log("Component");
    this.roomsService.updateRoom(this.room2).subscribe();
  }

}
