import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Subscription } from 'rxjs';
import { RoomClass } from 'src/app/classes/room.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-user',
  templateUrl: './room-user.component.html',
  styleUrls: ['./room-user.component.sass']
})
export class RoomUserComponent implements OnInit {

  public id: string = '';

  public win: any;

  roomSubscription: Subscription = new Subscription;
  public room = new RoomClass();

  constructor(
    public roomsService: RoomsService,
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
    console.log('hoal')
    this.cambio(this.room);
  }

  cambio(sala: RoomClass): void {
    let weigth = 0, medi = 0;
    for (let item = 0; item < sala.participantes.length; item++) {
      weigth = sala.participantes[item].cedula.length;
      medi = weigth - 4;
      for (let index = 0; index < medi; index++) {
        console.log(sala.participantes[item]);
        sala.participantes[item].cedula = sala.participantes[item].cedula.replace(sala.participantes[item].cedula[index], 'X');
      }
    }
    this.room = sala;
  }

  recibir(dato: any) {
    if (dato.days === 0 && dato.hours === 0 && dato.minutes === 0 && dato.seconds === 0) {
      console.clear();
      this.aleatorioWin();
    }
  }

  aleatorioWin(): any { // Ganador
    let weigth = 0, min = 0, max = 0, value = 0, medi = 0;
    let participantes = this.room.participantes;

    // Valor random para la posición
    max = this.room.participantes.length;
    console.log('El peso: ' + max); // Peso
    value = Math.floor(Math.random() * (max - min + 1) + min); // Posición a escoger
    console.log('Mínimo: ' + min + ' Máximo: ' + max + ' Valor: ' + value);
    // Búsqueda de la posición del valor
    if (this.room.participantes.length === 1) {
      this.win = this.room.participantes.find;
    } else {
      for (let item = 0; item < this.room.participantes.length; item++) {
        if (item === value) {
          weigth = participantes[item].cedula.length;
          console.log(weigth);
          medi = weigth - 4;
          console.log(medi);
          for (let index = 0; index < medi; index++) {
            console.log(participantes[item].cedula);
            participantes[item].cedula = participantes[item].cedula.replace(participantes[item].cedula[index], 'X');
          }
          this.win = this.room.participantes[item];
        }
      }
    }
    console.log(this.win);
    return this.win; // Retorna el array del ganador
  }

}
