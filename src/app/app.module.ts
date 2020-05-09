import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';


// Packages
import { NgSelectModule } from '@ng-select/ng-select';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { WindTurbineComponent } from './components/wind-turbine/wind-turbine.component';
import { ImgPipe } from './pipes/img.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CurrentWeatherComponent,
    HourlyForecastComponent,
    DailyForecastComponent,
    WindTurbineComponent,
    ImgPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    CommonModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
