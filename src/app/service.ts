import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NavParams } from 'ionic-angular'


/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var WLResourceRequest;
@Component({  
  
})

export class LuLuService {

  resultvalue: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('calling Adpater');    
  }
  
  
  call(adapter,params) {   
    console.log("Passing parameters are",params);   
     var resourceRequest = new WLResourceRequest(adapter,WLResourceRequest.GET,params);
     resourceRequest.send().then((response) => {
        this.resultvalue = response.responseText;
        console.log("CountryList",this.resultvalue);             
    },
    function(error){
        console.log(error);
    });
  }
   
  

}

