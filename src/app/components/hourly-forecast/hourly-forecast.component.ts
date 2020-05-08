import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent implements OnInit {
  city: string;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService
      .getForecasHourlytWeather()
      .subscribe((data) => console.log(data));
    this.weatherService
      .getForecasDailytWeather()
      .subscribe((data) => console.log(data));
  }

}
