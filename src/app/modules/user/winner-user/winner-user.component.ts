import { Component, OnInit, Input } from '@angular/core';
import { UserClass } from 'src/app/classes/user.class';
import { WinnerClass } from 'src/app/classes/winner.class';
import { WinnersService } from 'src/app/services/winners.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-winner-user',
  templateUrl: './winner-user.component.html',
  styleUrls: ['./winner-user.component.sass']
})
export class WinnerUserComponent implements OnInit {

  @Input() winValues: any;
  @Input() usersValues: UserClass[] = [];

  winnerSubscription: Subscription = new Subscription;
  public winner = new WinnerClass();
  
  public user = new UserClass();

  constructor(
    private winnersService: WinnersService
  ) { }

  ngOnInit(): void {
    this.search(this.winValues.cedula);
    this.winnersService.createWinner(this.user).subscribe();
    this.reemplazar();
  }

  search(cedula: string): void {
    this.usersValues.forEach(user => {
      if (user.cedula == cedula) {
        this.user = user;
      }
    });
  }

  reemplazar(): void {
    var dato, weigth, posS;
    dato = this.winValues;
    weigth = dato.cedula.length;
    posS = weigth - 4;
    for (let index = 0; index < posS; index++) {
      dato.cedula = dato.cedula.replace(dato.cedula[index], 'X');
    }
    this.winValues = dato;
  }

}
