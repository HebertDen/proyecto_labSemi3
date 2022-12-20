import { Component, OnInit, Input } from '@angular/core';
import { WinnerClass } from 'src/app/classes/winner.class';

@Component({
  selector: 'app-item-winner',
  templateUrl: './item-winner.component.html',
  styleUrls: ['./item-winner.component.sass']
})
export class ItemWinnerComponent implements OnInit {

  @Input() data: WinnerClass = {} as WinnerClass;

  constructor() { }

  ngOnInit(): void {
  }

}
