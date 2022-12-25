import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { RoomsService } from 'src/app/services/rooms.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { RoomClass } from 'src/app/classes/room.class';

@Component({
  selector: 'proyecto-countdown-timer',
  template: `
    <div id="timer" class="d-flex col col-12 p-3 justify-content-center">
    <div class="row text-center"><span>Días</span><h3> {{ time.days }}</h3></div>
    <div class="row text-center"><span>Horas</span><h3>{{ time.hours }}</h3></div>
    <div class="row text-center"><span>Minutos</span><h3> {{ time.minutes }}</h3></div>
    <div class="row text-center"><span>Segundos</span><h3> {{ time.seconds }}</h3></div>
    </div>
    `,
  styles: [``],
})
export class CountdownTimerComponent implements OnInit {
  roomSubscription: Subscription = new Subscription;

  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  public finishDateString: string = '';
  finishDate: Date = new Date();
  public sala = new RoomClass();

  public min: number = 0;
  public max: number = 0;

  @Input() data = new RoomClass();

  @Output() emitir = new EventEmitter<any>();

  public weigth: number = 0;
  public value: number = 0;

  public win: any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.finishDateString = this.data.tiempo;
      console.log(this.finishDateString);
      console.log(this.data);
      this.time = {
        days: 0, hours: 0, minutes: 0, seconds: 0
      };
      this.finishDate = new Date(this.finishDateString);
      console.log(this.finishDate);
      // console.clear();
      let counterTimer$ = this.start().subscribe(() => {
        if (this.time.days === 0 && this.time.hours === 0 && this.time.minutes === 0 && this.time.seconds === 0) {
          this.time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            days: 0
          }
          counterTimer$.unsubscribe();
          this.emitir.emit(this.time);
        }
      });
    }, 1000);
  }


  updateTime() {
    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }

  start(): any {
    const now = new Date();
    if (this.finishDate.getTime() > now.getTime()) {
      return interval(1000).pipe(
        map((x: number) => {
          this.updateTime();
          return x;
        })
      );
    }
  }
  
}
