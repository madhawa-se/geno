import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController } from 'ionic-angular';
import { FormBuilder,FormControl, FormGroup ,Validators} from '@angular/forms';

import { PostServiceProvider ,BlogModel} from '../../providers/post-service/post-service';
import * as $ from 'jquery'
/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  postForm  : FormGroup;
  post  : BlogModel = new BlogModel();

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,public toastCtrl: ToastController,public postServiceProvider: PostServiceProvider) {

  	this.postForm = new FormGroup({
    	title  : new FormControl('',Validators.required),
    	content  : new FormControl('',Validators.required),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  doPost(){
  	if(this.postForm.valid){
        this.postServiceProvider.createPost($.param(this.post)).then((result) => {
	      this.toastCtrl.create({message: 'News posted successfully', duration: 4500}).present();
	    }, (err) => {
	       this.toastCtrl.create({message: 'error occured !', duration: 4500}).present();
	    });
  	}else {
      this.toastCtrl.create({message: 'Please input valid title and content', duration: 4500})
      .present();
    }
  }

}
