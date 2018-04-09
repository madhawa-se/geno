import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonServiceProvider } from '../../providers/common-service/common-service';
import { FCM } from '@ionic-native/fcm';
/*
  Generated class for the FcMserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcMserviceProvider {

  constructor(public http: HttpClient,public commonService:CommonServiceProvider,private fcm: FCM) {
    console.log('Hello FcMserviceProvider Provider');
  }

  set_fcm_token(id,token){

    return new Promise(resolve => {
     // alert(this.commonService.REST_URL+'fcm/set_fcm_token/'+id+'/'+token);
      this.http.get(this.commonService.REST_URL+'fcm/set_fcm_token/'+id+'/'+token).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  get_fcm_token(){
        return this.fcm.getToken();
  }

  initNotification(){
  	      //Notifications
      this.fcm.subscribeToTopic('all');
      this.fcm.getToken().then(token=>{
          console.log(token);
          //alert(token);
          //this.set_fcm_token(token);
      })
      this.fcm.onNotification().subscribe(data=>{
        if(data.wasTapped){
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      })
      this.fcm.onTokenRefresh().subscribe(token=>{
       alert(token);
      });
      //end notifications.
  }

}
