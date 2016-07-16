import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import {WeatherService} from '../../services/weather.services';
import {Storage, LocalStorage} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/weather/weather.html',
    providers: [WeatherService]
})
export class WeatherPage implements OnInit {

    private weather;
    private searchStr;
    private results;
    private zmw;
    private cityLocalStorage;
    private selectedCity;

    constructor(
        private navController: NavController,
        private _weatherService: WeatherService
    ) { }

    ngOnInit() {
        this.cityLocalStorage = new Storage(LocalStorage);
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
        if (typeof (localStorage) !== 'undefined') {
            this.selectedCity = this.cityLocalStorage.get('city').__zone_symbol__value;
            this.zmw = JSON.parse(this.selectedCity).zmw;
        }else {
            this.zmw = "00000.37.07156";
        }


        
    }

}