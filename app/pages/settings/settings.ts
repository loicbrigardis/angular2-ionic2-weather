import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../services/weather.services';
import {WeatherPage} from '../weather/weather';
import {Storage, LocalStorage} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/settings/settings.html',
    providers: [WeatherService]
})
export class SettingsPage implements OnInit {

    private searchStr;
    private defaultCity;
    private results;
    private cityLocalStorage;
    private selectedCity;

    constructor(
        private _weatherService: WeatherService,
        private navController: NavController
    ) { }

    ngOnInit() {
        this.cityLocalStorage = new Storage(LocalStorage);
        this.getDefaultCity(this.selectedCity);
    }

    getQuery() {
        this._weatherService.searchCity(this.searchStr)
            .subscribe(res => {
                this.results = res.RESULTS;
            });
    }

    getDefaultCity(selectedCity?) {
        if (typeof (localStorage) !== 'undefined') {
            this.defaultCity = JSON.parse(this.cityLocalStorage.get('city').__zone_symbol__value).name;
        } else {
            this.defaultCity = 'Paris, France';
        }
    }

    setDefaultCity(city) {
        this.results = [];
        if (typeof (localStorage) !== 'undefined') {
            this.cityLocalStorage.set('city', JSON.stringify(city));
            this.selectedCity = this.cityLocalStorage.get('city').__zone_symbol__value;
            this.searchStr = city.name;
            this.getDefaultCity();
        } else {
            console.log('LocalStorage Not Supported');
        }
    }

    saveChanges() {
        this.navController.setRoot(WeatherPage);
    }
}