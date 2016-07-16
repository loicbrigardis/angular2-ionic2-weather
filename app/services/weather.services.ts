import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    private _apiKey: string = "60557eb5d5b9e65e";
    private _apiUrl: string = "http://localhost:8100/api/" + this._apiKey + "/conditions/q/";
    private _searchUrl: string = "http://localhost:8100/search/aq?query=";


    constructor(private _http: Http) {
    }

    getWeather(zmw) {
        return this._http.get(this._apiUrl+ '/zmw:' + zmw + '.json')
            .map(x => x.json());
    }

    searchCity(searchStr) {
        return this._http.get(this._searchUrl  + searchStr)
            .map(x => x.json());
    }

}