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

  @Input() win: any;

  public user = new UserClass();
  public winner = new WinnerClass();

  constructor(
    private usersServices: UsersService,
    private winnersService: WinnersService
  ) { }

  ngOnInit(): void {
    console.log('ahora');
    console.log(this.win);

    this.userSubscription = this.usersServices.get$().subscribe((itemUser: UserClass) => {
      this.user = itemUser;
    });
    this.usersServices
      .get(this.win.id)
      .subscribe();
    
    this.winnersService.createWinner(this.user).subscribe();
  }

}
