import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage implements OnInit {
    constructor(private navController: NavController) { }

    ngOnInit() { }

}