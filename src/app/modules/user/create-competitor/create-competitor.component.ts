import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { UserClass } from 'src/app/classes/user.class';
import { RoomClass } from 'src/app/classes/room.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-competitor',
  templateUrl: './create-competitor.component.html',
  styleUrls: ['./create-competitor.component.sass']
})
export class CreateCompetitorComponent implements OnInit {
  public user = new UserClass();
  public room = new RoomClass();

  constructor(
    public usersService: UsersService,
    public roomsService: RoomsService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(user: UserClass): void {
    this.user = user;
    this.usersService.createUser(this.user).subscribe();
    this.roomsService.updateRoom(this.onEnroll(this.room.participantes)).subscribe();
    this.route.navigate(['/user/']);
  }

  onEnroll(participantes: any): RoomClass {
    participantes.numero = Math.floor(Math.random()*31)+1;
    participantes.cedula = this.user.cedula;
    this.room.participantes = participantes;
    return this.room;
  }

}
