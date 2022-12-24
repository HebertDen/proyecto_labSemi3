import { Component, OnInit, Input } from '@angular/core';
import { RoomClass } from 'src/app/classes/room.class';

@Component({
  selector: 'app-item-room',
  templateUrl: './item-room.component.html',
  styleUrls: ['./item-room.component.sass']
})
export class ItemRoomComponent implements OnInit {
  room = new RoomClass();

  @Input() data: RoomClass = {} as RoomClass;

  constructor() { }

  ngOnInit(): void {}

}
