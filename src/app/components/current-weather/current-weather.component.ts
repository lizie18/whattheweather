import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { WeatherService } from 'src/app/services/weather.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Output() cityId: EventEmitter<string> = new EventEmitter<string>();
  matchWeather = 'red';
  date: any;
  data;
  show = false;
  currentWeather;
  forecastHourly;
  forecastDaily;
  constructor(
    private cityService: CityService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.cityService
      .getCities()
      .subscribe(() => (this.data = this.cityService.citiesList));
    this.getCurrentWearther();
    this.getDate();
    this.weatherService
      .getForecasHourlytWeather()
      .subscribe(dataHourly => ( this.forecastHourly = dataHourly) );
    this.weatherService
      .getForecasDailytWeather()
      .subscribe( dataDaily => this.forecastDaily = dataDaily );
  }

  getDate() {
    this.date = setInterval(() => {
      this.date = new Date();
    }, 1000);

    setTimeout(() => {
      this.show = true;
    }, 1000);
  }
  getCurrentWearther(metric?, city?) {
    this.weatherService.getCurrentWeather(metric, city).subscribe((data) => {
      this.currentWeather = data;
      console.log('this.currentWeather', this.currentWeather);
    });
  }

  changeCity(e) {
    this.getCurrentWearther('metric', e.id);
    this.cityId.emit(e.id);
  }
}
