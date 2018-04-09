import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { PostServiceProvider } from '../../providers/post-service/post-service';
/**
 * Generated class for the PostListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
})

export class PostListPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public postServiceProvider: PostServiceProvider) {
  	this.get_posts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostListPage');
  }

  public stories;

   get_posts() {  	
    this.postServiceProvider.getPosts().then((result) => {
    	this.stories=result;
       console.log(result); 
    }, (err) => {
       console.log(err); 
    });
    
  }

  createPost(){

  }
  getRandomNum(){
      return Math.floor((Math.random()*6)+1);
  }

}
