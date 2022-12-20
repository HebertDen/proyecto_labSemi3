import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Subscription } from 'rxjs';
import { RoomClass } from 'src/app/classes/room.class';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.sass']
})
export class HomeUserComponent implements OnInit {

  roomSubscription: Subscription = new Subscription;
  public room = new RoomClass();
  public rooms: RoomClass[] = [];

  constructor(
    public roomsService: RoomsService
  ) { }

  ngOnInit(): void {
    console.log("Pagina");
    this.roomSubscription = this.roomsService.getAll$().subscribe((items: RoomClass[]) => {
      this.rooms = items
    });
    this.roomsService
      .getAll()
      .subscribe();
  }

  eliminarSala(room: RoomClass): void {
    this.roomsService
      .deleteRoom(room)
      .subscribe();
  }

  entrarSala(): void { // Comprar para jugar en el sorteo

  }
}