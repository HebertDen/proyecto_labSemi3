import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { WinnersService } from 'src/app/services/winners.service';
import { Subscription } from 'rxjs';
import { RoomClass } from 'src/app/classes/room.class';
import { WinnerClass } from 'src/app/classes/winner.class';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.sass']
})
export class HomeAdminComponent implements OnInit {

  // Rooms
  roomSubscription: Subscription = new Subscription;
  public room = new RoomClass();
  public rooms: RoomClass[] = [];

  // Winners
  winnerSubscription: Subscription = new Subscription;
  public winner = new WinnerClass();
  public winners: WinnerClass[] = [];

  constructor(
    public roomsService: RoomsService,
    public winnersService: WinnersService
  ) { }

  ngOnInit(): void {
    console.log("Pagina");
    // Rooms
    this.roomSubscription = this.roomsService.getAll$().subscribe((itemsRooms: RoomClass[]) => {
      this.rooms = itemsRooms
    });
    this.roomsService
      .getAll()
      .subscribe();
    
    // Winners
    this.winnerSubscription = this.winnersService.getAll$().subscribe((itemsWinners: WinnerClass[]) => {
      this.winners = itemsWinners
    });
    this.winnersService
      .getAll()
      .subscribe();
  }

  eliminarSala(room: RoomClass): void {
    this.roomsService
      .deleteRoom(room)
      .subscribe();
  }

}
