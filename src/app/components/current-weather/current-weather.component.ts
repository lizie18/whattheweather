import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  date: any;
  show = false;
  constructor(
    private dateService: DateService
  ) { }

  ngOnInit(): void {

    this.date = setInterval(() => {
      this.date = new Date();
    }, 1000);

    setTimeout(() => {
      this.show = true;
    }, 1000);
  }

}
