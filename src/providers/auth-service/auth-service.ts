import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

import { FCM } from '@ionic-native/fcm';
import { FcMserviceProvider } from '../../providers/fc-mservice/fc-mservice';

import * as $ from 'jquery';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
 headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

  constructor(public http: HttpClient,private storage: Storage,public commonService:CommonServiceProvider,private fcm: FCM,private fcmService:FcMserviceProvider) {
    console.log('Hello AuthServiceProvider Provider');
    //this.local = new Storage(LocalStorage);
  }

  postData(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.commonService.REST_URL+'user/login_user',(data), { headers: this.headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  signupUser(user) {
    return new Promise((resolve, reject) => {
      this.http.post(this.commonService.REST_URL+'user/register_user',($.param(user)), { headers: this.headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  saveUser(user){
     this.storage.set('user',user);
  }
  getUser(){
      return this.storage.get('user');
  }
  isAdmin(){

  }

}
