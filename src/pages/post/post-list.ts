import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public postServiceProvider: PostServiceProvider,private socialSharing: SocialSharing) {
  	this.get_posts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostListPage');
  }

  public stories;

  data: any;
  users: string[];
  errorMessage: string;
  page = 1;
  postPerPage = 0;
  totalData = 0;

   get_posts() {  	
    this.postServiceProvider.getPosts(this.page).then((result:any) => {
    	this.stories=result.posts;
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

  regularShare(index){
    var msg = "hello world";
    this.socialSharing.share(msg, null, null, null);
  }
  likePost(index:number){
      this.stories[index].liked=true;
  }

  doInfinite(infiniteScroll) {

    this.page = this.page+1;
    setTimeout(() => {
      
    this.postServiceProvider.getPosts(this.page).then((result:any) => {
      console.log(this.stories);
      console.log(result.posts);

      this.stories=this.stories.concat(result.posts);
      this.postPerPage = result.post_per_page;
      this.totalData = result.total;
      console.log(result); 
    }, (err) => {
      console.log(err); 
    });

      console.log('Async operation has ended');
      infiniteScroll.complete();

    }, 1000);
  }

}
