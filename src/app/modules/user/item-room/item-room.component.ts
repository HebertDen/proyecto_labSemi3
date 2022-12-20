import { Component, OnInit, Input } from '@angular/core';
import { RoomClass } from 'src/app/classes/room.class';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-item-room',
  templateUrl: './item-room.component.html',
  styleUrls: ['./item-room.component.sass']
})
export class ItemRoomComponent implements OnInit {
  room = new RoomClass();

  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  public timer: any;
  public date = new Date();
  public time: number = 0;

  @Input() data: RoomClass = {} as RoomClass;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.hours = this.data.horas;
    this.minutes = this.data.minutos;
    this.seconds = this.data.segundos;
    this.start();
  }

  updateTimer() {
    this.date.setHours(this.hours);
    this.date.setMinutes(this.minutes);
    this.date.setSeconds(this.seconds);
    this.date.setMilliseconds(0);
    this.time = this.date.getTime();
    this.date.setTime(this.time - 1000);

    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();

    if (this.date.getHours() === 0 &&
      this.date.getMinutes() === 0 &&
      this.date.getSeconds() === 0) {
      clearInterval(this.timer);
      this.stop();
      console.log("Termino el juego")
    }
  }

  stop() {
    clearInterval(this.timer);
  }

  reset() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.stop();
  }

  start() {
    if (this.hours > 0 || this.minutes > 0 || this.seconds > 0) {
      this.updateTimer();

      if (this.seconds > 0) {
        this.timer = setInterval(() => {
          this.updateTimer();
        }, 1000);
      }
    }
  }

}
