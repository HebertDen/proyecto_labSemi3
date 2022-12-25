import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Subscription } from 'rxjs';
import { RoomClass } from 'src/app/classes/room.class';
import { ActivatedRoute } from '@angular/router';
import { UserClass } from 'src/app/classes/user.class';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-room-user',
  templateUrl: './room-user.component.html',
  styleUrls: ['./room-user.component.sass']
})
export class RoomUserComponent implements OnInit {

  public id: string = '';

  public win: any;
  public win2: any;

  roomSubscription: Subscription = new Subscription;
  public room = new RoomClass();

  userSubscription: Subscription = new Subscription;
  public users: UserClass[] = [];

  public dato: any;
  public datosParticipantes: any;

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
    this.userSubscription = this.usersService.getAll$().subscribe((itemUsers: UserClass[]) => {
      this.users = itemUsers;
    });
    this.usersService
      .getAll()
      .subscribe();
  }

  recibir(dato: any) {
    if (dato.days === 0 && dato.hours === 0 && dato.minutes === 0 && dato.seconds === 0) {
      console.clear();
      this.aleatorioWin();
    }
  }

  aleatorioWin(): void { // Ganador
    let min = 0, max = 0, value = 0;
    // Búsqueda de la posición del valor
    if (this.room.participantes.length === 1) {
      this.win = this.room.participantes;
    } else {
      // Valor random para la posición
      max = this.room.participantes.length;
      // console.log('El peso: ' + max); // Peso
      value = Math.floor(Math.random() * (max - min + 1) + min); // Posición a escoger
      // console.log('Mínimo: ' + min + ' Máximo: ' + max + ' Valor: ' + value);
      for (let item = 0; item < this.room.participantes.length; item++) {
        if (item === value) {
          this.win = this.room.participantes[item];
        }
      }
    }
  }

}
