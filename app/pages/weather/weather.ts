import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import {WeatherService} from '../../services/weather.services';

@Component({
    templateUrl: 'build/pages/weather/weather.html',
    providers: [WeatherService]
})
export class WeatherPage implements OnInit {

    city = 'Boston';
    state = 'MA'
    weather;
    searchStr;
    results;
    zmw;

    constructor(
        private navController: NavController,
        private _weatherService: WeatherService
    ) { }

    ngOnInit() {
        this.getDefaultCity();
        this._weatherService.getWeather(this.zmw)
            .subscribe(data => {
                this.weather = data.current_observation;
            });
    }

    getQuery() {
        this._weatherService.searchCity(this.searchStr)
            .subscribe(res => {
                this.results = res.RESULTS;
                console.log(res.RESULTS);
            });
    }

    chooseCity(city) {
        this.results = [];
        this._weatherService.getWeather(city.zmw)
            .subscribe(data => {
                this.weather = data.current_observation;
            });
    }

    getDefaultCity() {
        this.zmw = '02101.1.99999'
    }

}