import { Component } from '@angular/core';
import { 
  NavController, 
  NavParams, 
  Platform, 
  ActionSheetController, 
  LoadingController, 
  ToastController,
  App,
} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CommonServiceProvider } from '../../providers/common-service/common-service';
import { Storage } from '@ionic/storage';
import { 
  FormGroup, 
  FormControl, 
   } from '@angular/forms';

//import { TabsPage } from '../tabs/tabs';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

interface User {
    name?: string;
    email?: string;
    password?: string;
}

@Component({
  selector: 'page-profile-complete',
  templateUrl: 'profile-complete.html',
})
export class ProfileCompletePage {
  form      : FormGroup;
  submitted : boolean = false;
  base64Image: any;
  user:User={};
  userMessage={status:false,msg:null};
  constructor(public app: App,public navCtrl: NavController, public navParams : NavParams,public platform  : Platform,public loadingCtrl  : LoadingController,public toastCtrl : ToastController,public authServiceProvider: AuthServiceProvider,public storage : Storage,public commonService:CommonServiceProvider) {

    this.user.name = navParams.get('username');
    this.user.email    = navParams.get('email');
    this.user.password = navParams.get('password');
    this.signupUser(this.user);
   // this.authServiceProvider.saveUser(this.user);
  }


  signupUser(user:User) {   
    this.authServiceProvider.signupUser(this.user).then((result:any) => {
      //this.responseData = result;
       console.log(result); 

       if(result.status){
          this.userMessage.status=true;
       }else{
          this.userMessage.status=false;
       }
       this.userMessage.msg=result.msg;

    }, (err) => {
       console.log(err); 
    });
    
  }

  getUser(){
    this.authServiceProvider.getUser().then((val) => {
        alert(val);
     });
  }

  ionViewDidLoad() {}

  // onSubmit(form: FormGroup) {
  //   this.submitted = true;
  //   if (form.valid && this.user) {
  //     let loading = this.loadingCtrl.create();
  //     loading.present();
  //     this.user.photo = form.value.photo;
  //     this.user.bio   = form.value.bio;
      
  //     this.userProvider.completeProfile(this.user)
  //       .then(res=> {
  //         loading.dismiss();
  //         res.sendEmailVerification();
  //         //this.app.getRootNav().setRoot(TabsPage);
  //         this.storage.ready().then(() => {
  //           this.storage.set('password', form.value.password);
  //         });

  //       })
  //       .catch((error)=> {
  //           loading.dismiss();
  //           console.log('Error: ' + JSON.stringify(error));
  //       });
  //   } else {
  //     this.toastCtrl.create({message: 'Please input your bio.', duration: 4500})
  //     .present();
  //   }
  // }

}
