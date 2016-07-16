import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    constructor(private _http:Http) { 
        console.log('Service connected...');
        
    }

}