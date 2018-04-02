import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FcMserviceProvider } from '../../providers/fc-mservice/fc-mservice';

import * as $ from 'jquery'

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	users: any;
	loginForm: FormGroup;
    userInfo:any={email:'',password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public authServiceProvider: AuthServiceProvider,public fcmService:FcMserviceProvider,private formBuilder: FormBuilder,public toastCtrl: ToastController) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
  		  password: ['', Validators.required]
      });
  }

  signIn() {  	
    this.authServiceProvider.postData($.param(this.userInfo)).then((result) => {
      //this.responseData = result;
       console.log(result); 
       this.getUserInfo(result);

    }, (err) => {
       console.log(err); 
    });
    
  }

  saveUser(user) {    
    this.authServiceProvider.saveUser(user);
  }

  getUserInfo(result){
    var self=this;
     if(!(result==undefined)){
       console.log('data recieved');
       if(result.status===true){
          if(result.user_info.is_verified==='0'){
            this.toastCtrl.create({message: 'your account is not verified.check the email', duration: 4500}).present();
          }else if(result.user_info.is_verified==='1'){
            this.toastCtrl.create({message: 'your account hasn\'t activated by the admin', duration: 4500}).present();
          }else if(result.user_info.is_verified==='2'){
            this.saveUser(result.user_info);

            ////////////////////////
               
                this.fcmService.get_fcm_token().then(token=>{
                  self.fcmService.set_fcm_token(result.user_info.user_id,token).then((responce) => {
                     console.log(responce); 
                  }, (err) => {
                     console.log(err); 
                  });
                });

            ////////////////////////
            this.navigateHome();
          }else{
            this.toastCtrl.create({message: 'unknown error occured ! please try again later', duration: 4500}).present(); 
          }
       }else{
			   //login failed
         this.toastCtrl.create({message: 'Login failed! recheck the credentials', duration: 4500}).present();
       }
     }else{
     	console.log('data did not recieved');
      this.toastCtrl.create({message: 'unknown error occured ! please try again later', duration: 4500}).present();
     }
  }

  onSignIn() {

  }

  onForgotPassword() {
    
  }

  navigateSignup() {
    this.navCtrl.push(SignupPage);
  }

  navigateHome() {
    this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "forward"});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
