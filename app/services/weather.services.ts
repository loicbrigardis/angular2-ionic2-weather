import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    private _apiKey: string = "60557eb5d5b9e65e";
    private _apiUrl: string = "http://api.wunderground.com/api/" + this._apiKey + "/conditions/q/";


    constructor(private _http: Http) {
    }

    getWeather (city, state) {
        return this._http.get(this._apiUrl + state +'/'+ city + '.json')
        .map (x => x.json());
    
    }

}