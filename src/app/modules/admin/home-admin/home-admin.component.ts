import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomClass } from 'src/app/classes/room.class';
import { WinnersService } from 'src/app/services/winners.service';
import { WinnerClass } from 'src/app/classes/winner.class';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    public winnersService: WinnersService,
    private route: Router
  ) { }

  ngOnInit(): void {

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
    this.route.navigate(['/admin/']);
  }

}
