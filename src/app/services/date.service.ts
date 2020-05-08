import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DateService {
  currentDate: any;
  constructor() {}

  getCurrentDate(currentDate) {
    setInterval(() => {
      currentDate = new Date();
    }, 1000);
  }
}
