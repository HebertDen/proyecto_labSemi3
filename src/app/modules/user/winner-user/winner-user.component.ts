import { Component, OnInit, Input } from '@angular/core';
import { UserClass } from 'src/app/classes/user.class';
import { UsersService } from 'src/app/services/users.service';
import { WinnerClass } from 'src/app/classes/winner.class';
import { WinnersService } from 'src/app/services/winners.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-winner-user',
  templateUrl: './winner-user.component.html',
  styleUrls: ['./winner-user.component.sass']
})
export class WinnerUserComponent implements OnInit {

  userSubscription: Subscription = new Subscription;
  winnerSubscription: Subscription = new Subscription;

  @Input() winValues: any;

  public user = new UserClass();
  public users: UserClass[] = [];
  public winner = new WinnerClass();

  constructor(
    private usersService: UsersService,
    private winnersService: WinnersService
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.usersService.getAll$().subscribe((items: UserClass[]) => {
      this.users = items;
    });
    this.usersService
      .getAll()
      .subscribe();
    this.users;
    this.search(this.winValues.cedula);
    // this.winnersService.createWinner(this.user).subscribe();
    this.reemplazar();
  }

  search(cedula: string): void {
    this.users.forEach(user => {
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
