import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder,FormControl, FormGroup ,Validators} from '@angular/forms';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SignupPasswordPage } from './signup-password';
//import * as $ from 'jquery'

@Component({
  selector: 'page-signup-email',
  templateUrl: 'signup-email.html'
})
export class SignupEmailPage {
  form      : FormGroup;
  username  : string = "";

  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public loadingCtrl  : LoadingController,
    public toastCtrl    : ToastController,
    public authServiceProvider: AuthServiceProvider,
    private formBuilder: FormBuilder
  ) {
   this.form = new FormGroup({
     email        : new FormControl('', Validators.compose([Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])),
    });
   this.username = navParams.get('username');
  }

  ionViewDidLoad() {}

  pressBack() {
    this.navCtrl.pop();
  }

  test(){
    alert('boom');
  }

  pressNext(form: FormGroup) {
    if (form.valid) {
      this.navCtrl.push(SignupPasswordPage, {
        username: this.username,
        email   : form.value.email,
      })
    } else {
      this.toastCtrl.create({message: 'Please input valid email address.', duration: 4500})
      .present();
    }
  }
}
