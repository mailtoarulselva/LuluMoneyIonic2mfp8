import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Recipients } from '../pages/recipients/recipients';
import { MyTransfer } from '../pages/mytransfer/mytransfer';
import { Settings } from '../pages/settings/settings';
import { Passcode } from '../pages/passcode/passcode';
import { Otp} from '../pages/otp/otp';
import {Authsuccess } from  '../pages/authsuccess/authsuccess';
import {Idchallenge} from '../pages/idchallenge/idchallenge';
import { Introslides } from '../pages/introslides/introslides';
import { Detailsconfirm} from '../pages/detailsconfirm/detailsconfirm';
import { Recipentadd } from '../pages/recipentadd/recipentadd';
import { Transferdetails } from '../pages/transferdetails/transferdetails';



@NgModule({
  declarations: [
    MyApp,
   
    Home,
    Recipients,
    MyTransfer,
    Settings,
    Passcode,
    Otp,
    Authsuccess,
    Idchallenge,
    Introslides,
    Detailsconfirm,
    Recipentadd,
    Transferdetails

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    Home,
    Recipients,
    MyTransfer,
    Settings,
    Passcode,
    Otp,
    Authsuccess,
    Idchallenge,
    Introslides,
    Detailsconfirm,
    Recipentadd,
    Transferdetails
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}