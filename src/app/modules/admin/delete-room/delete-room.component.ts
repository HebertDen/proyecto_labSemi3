import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomClass } from 'src/app/classes/room.class';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.sass']
})
export class DeleteRoomComponent implements OnInit {

  roomSubscription: Subscription = new Subscription; 
  public room = new RoomClass();
  public room2 = new RoomClass();
  public id: string = '';

  constructor(
    public roomsService: RoomsService,
    private router: ActivatedRoute,
    private route: Router
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

  onDelete(room: RoomClass): void {
    this.roomsService
      .deleteRoom(room)
      .subscribe();
    this.route.navigate(['/admin/']);
  }

}
