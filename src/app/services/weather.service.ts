import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES, API_KEY } from '../config/config';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(units: string = 'metric', lang: string = 'sp', city?: string) {
    const url = `${URL_SERVICES}/weather?q=Huancayo&units=${units}&lang=${lang}&appid=${API_KEY}`;
    return this.http.get(url);
  }
}
