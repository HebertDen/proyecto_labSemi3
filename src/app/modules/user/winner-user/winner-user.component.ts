import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-winner-user',
  templateUrl: './winner-user.component.html',
  styleUrls: ['./winner-user.component.sass']
})
export class WinnerUserComponent implements OnInit {

  @Input() win: string = '';

  constructor() { }


  ngOnInit(): void {
  }

}
