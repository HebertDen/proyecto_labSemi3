import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomClass } from 'src/app/classes/room.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.sass']
})
export class CreateRoomComponent implements OnInit {
  public room = new RoomClass();

  constructor(
    public roomsService: RoomsService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(room: RoomClass): void {
    this.room = room;
    this.roomsService.createRoom(this.room).subscribe();
    this.route.navigate(['/admin/']);
  }

}
