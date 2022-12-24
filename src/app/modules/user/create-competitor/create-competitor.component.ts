import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { UserClass } from 'src/app/classes/user.class';
import { RoomClass } from 'src/app/classes/room.class';
import { Router, ActivatedRoute } from '@angular/router';
import { ParticipantesClass } from 'src/app/classes/participantes.class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-competitor',
  templateUrl: './create-competitor.component.html',
  styleUrls: ['./create-competitor.component.sass']
})
export class CreateCompetitorComponent implements OnInit {
  public roomSubscription: Subscription = new Subscription;

  public user = new UserClass();
  public room = new RoomClass();

  public id: string = '';

  public participante = new ParticipantesClass();
  public numero: number = 0;
  public cedula: string = '';

  constructor(
    public usersService: UsersService,
    public roomsService: RoomsService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') || '';
    this.roomSubscription = this.roomsService.get$().subscribe((itemRoom: RoomClass) => {
      this.room = itemRoom;
    });
    this.roomsService
      .get(this.id)
      .subscribe();
  }

  onCreate(user: UserClass): void {
    if(this.room.capacidadActual === this.room.capacidadTotal){
      console.log('No es posible ingresar más participantes');
    } else if(this.room.capacidadActual < this.room.capacidadTotal){
      this.user = user;
      this.onEnroll();
      this.usersService.createUser(this.user).subscribe();
      console.log(this.room);
      this.roomsService.updateRoom(this.room).subscribe();
      this.route.navigate(['/room/'+this.id]);
    }
  }

  onEnroll(): void {
    this.numero = Math.floor(Math.random() * 31) + 1;
    this.cedula = this.user.cedula;
    this.participante.id = this.user.id;
    this.participante.numero = this.numero;
    this.participante.cedula = this.cedula;
    this.room.participantes.push(this.participante);
    this.room.capacidadActual += 1;
    this.room.ingresoTotal = this.room.precio * this.room.participantes.length;
    console.log(this.participante);
  }

}
