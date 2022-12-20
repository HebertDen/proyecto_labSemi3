import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoomClass } from 'src/app/classes/room.class';

@Component({
  selector: 'app-item-room',
  templateUrl: './item-room.component.html',
  styleUrls: ['./item-room.component.sass']
})
export class ItemRoomComponent implements OnInit {
  room = new RoomClass();

  @Input() data: RoomClass = {} as RoomClass;

  @Output() sendRoom = new EventEmitter<RoomClass>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(room: RoomClass): void {
    // MÉTODO ALTERNATIVO
    // this.roomsService
    //   .deleteRoom(room)
    //   .subscribe();
    this.room = room;
    this.sendRoom.emit(this.room);
  }

}