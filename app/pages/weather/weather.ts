import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import {WeatherService} from '../../services/weather.services';

@Component({
    templateUrl: 'build/pages/weather/weather.html',
    providers: [WeatherService]
})
export class WeatherPage implements OnInit {
    constructor(
        private navController: NavController,
        private _weatherService: WeatherService
        ) { }

    ngOnInit() { 
        
    }

}