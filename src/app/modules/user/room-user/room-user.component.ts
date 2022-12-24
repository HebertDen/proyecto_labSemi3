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

  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  public timer: any;
  public date = new Date();
  public time: number = 0;

  public value: number = 0;

  public win: string = '';

  roomSubscription: Subscription = new Subscription;
  public room = new RoomClass();
  public roomForTime = new RoomClass();

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
    this.roomSubscription = this.roomsService.get$().subscribe((itemRoom: RoomClass) => {
      this.room = itemRoom;
    });
    this.roomsService
      .get(this.id)
      .subscribe();
    this.roomSubscription = this.roomsService.conteoRoom$().subscribe();
    this.roomsService
      .conteoRoom(this.room)
      .subscribe();
  }

  asign(): void {
    console.log("Asign");
    this.hours = this.room.horas;
    this.minutes = this.room.minutos;
    this.seconds = this.room.segundos;
  }

  updateJSON(horas: number, minutos: number, segundos: number){
    this.room.horas = horas;
    this.room.minutos = minutos;
    this.room.segundos = segundos;
    this.id = this.router.snapshot.paramMap.get('id') || '';
    this.roomsService
      .updateRoom(this.room)
      .subscribe();
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

    this.updateJSON(this.hours, this.minutes, this.seconds);

    if (this.date.getHours() === 0 &&
      this.date.getMinutes() === 0 &&
      this.date.getSeconds() === 0) {
      clearInterval(this.timer);
      this.stop();
      this.sorteo(this.room.participantes);
      console.log("Termino el juego")
    }
  }

  stop() {
    console.log("Stop");
    clearInterval(this.timer);
  }

  reset() {
    console.log("Reset");
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.stop();
  }

  start() {
    console.log('Entro'+this.minutes);
    if (this.hours > 0 || this.minutes > 0 || this.seconds > 0) {
      console.log("Tambien");
      this.updateTimer();

      if (this.seconds > 0) {
        console.log("Otro");
        this.timer = setInterval(() => {
          this.updateTimer();
        }, 1000);
      }
    }
  }

  sorteo(participantes: any): void {
    this.value = Math.floor(Math.random()*31)+1;
    console.log(this.value);
    while(participantes.length){
      if(this.value === participantes.numero){
        this.win = participantes.cedula;
      }
    }
  }

}
