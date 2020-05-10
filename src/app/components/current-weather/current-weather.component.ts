import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  currentTime: Date;
  citiesList;
  currentWeather;
  forecastHourly;
  forecastDaily;
  constructor(
    private cityService: CityService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getDate();

    this.cityService
    .getCities()
    .subscribe(() => (this.citiesList = this.cityService.citiesList));

    this.getCurrentWearther();

    this.weatherService
    .getForecasHourlytWeather()
    .subscribe(dataHourly => ( this.forecastHourly = dataHourly) );

    this.weatherService
    .getForecasDailytWeather()
    .subscribe( dataDaily => this.forecastDaily = dataDaily );
  }

  getDate() {
    setInterval(() => {
      this.currentTime = new Date();
      console.log(this.currentTime.getHours());
    }, 1000);
  }

  getCurrentWearther(metric?, city?) {
    this.weatherService.getCurrentWeather(metric, city).subscribe(
      data => {this.currentWeather = data;
      console.log(data);
      }
      );
  }

  changeCity(e) {
    this.getCurrentWearther('metric', e.id);
  }

}
