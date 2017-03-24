import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NavParams } from 'ionic-angular'
import { LoadingController } from 'ionic-angular';
import { Recipients } from '../recipients/recipients';
import { MyTransfer } from '../mytransfer/mytransfer';
import { LuLuService } from '../../app/service'

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var WLResourceRequest;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 

})

export class Home {

  benelist: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  navigateytransfer() {
    this.navCtrl.push(MyTransfer);
  }
  navigateRecipients() {  
    //this.navCtrl.push(Recipients);
    
    var path="agent/country/7841007849990001/147021566652945";
    var method="GET";
    var params= null;
    var adpaterparam = [path,method,params];
    console.log("Passing parameters are",adpaterparam); 
    //LuLuService.call("/adapters/TestBackendAdpater/getCountryList",adpaterparam);
    var resourceRequest = new WLResourceRequest("/adapters/TestBackendAdpater/getCountryList",WLResourceRequest.GET);
     resourceRequest.send().then((response) => {
        this.benelist = response.responseText;
        console.log("CountryList",this.benelist); 
        this.navCtrl.push(Recipients);            
    },
    function(error){
        console.log(error);
    });
    
  }
   
  

}

