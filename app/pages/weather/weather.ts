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
    
    constructor(
        private navController: NavController,
        private _weatherService: WeatherService
        ) { }

    ngOnInit() { 
        this._weatherService.getWeather(this.city, this.state)
        .subscribe(data => {
            console.log(data);
            this.weather = data.current_observation;
        });
    }

    getQuery () {
        this._weatherService.searchCity(this.searchStr)
        .subscribe(res => {
            
            this.results = res.RESULTS;
            console.log(this.results);
        });
    }

}