export class Time {
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    constructor() {}

    setValues(item: any){
        this.hours = item.hours;
        this.minutes = item.minutes;
        this.seconds = item.seconds;
    }
}
