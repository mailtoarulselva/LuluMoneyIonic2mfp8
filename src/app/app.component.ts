import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import { Home } from '../pages/home/home';
import { Recipients } from '../pages/recipients/recipients';
import { MyTransfer } from '../pages/mytransfer/mytransfer';
import { Settings } from '../pages/settings/settings';
import { Passcode } from '../pages/passcode/passcode';
import { Otp} from '../pages/otp/otp';
import {Authsuccess } from  '../pages/authsuccess/authsuccess';
import { Idchallenge } from '../pages/idchallenge/idchallenge';
import { Introslides } from '../pages/introslides/introslides';
import { Detailsconfirm } from '../pages/detailsconfirm/detailsconfirm';
import { Recipentadd } from '../pages/recipentadd/recipentadd';
import { Transferdetails } from '../pages/transferdetails/transferdetails';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      
      { title: 'Send Money', component: Home },
      {title: 'Recipients', component: Recipients },
      {title: 'My Transfers', component: MyTransfer },
      {title: 'Settings', component: Settings },
      {title: 'Passcode', component: Passcode },
      {title: 'Customer Authorization', component: Otp },
      {title: 'AuthrizationSuccess', component: Authsuccess},
      {title: 'Idchallenge', component: Idchallenge},
      {title: 'Introslides', component: Introslides},
      {title: 'Detailsconfirm',component: Detailsconfirm},
      {title: 'Recipentadd',component: Recipentadd},
      {title: 'Transferdetails',component: Transferdetails}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.backgroundColorByName('Primaryblue');
      Splashscreen.show();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
