import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/weather/weather.html'
})
export class WeatherPage implements OnInit {
    constructor(private navController: NavController) { }

    ngOnInit() { }

}