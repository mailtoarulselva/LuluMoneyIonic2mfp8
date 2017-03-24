import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/home';

/*
  Generated class for the Introslides page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-introslides',
  templateUrl: 'introslides.html'
})
export class Introslides {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroslidesPage');
  }

  navigatehomePage() {
    this.navCtrl.push(Home);
  }

}
