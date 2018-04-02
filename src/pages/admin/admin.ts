import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AdminServiceProvider } from '../../providers/admin-service/admin-service';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  public newUsers;

  constructor(public navCtrl: NavController, public navParams: NavParams,public adminService:AdminServiceProvider) {
	this.getNewUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

   getNewUsers() {  	
    this.adminService.getNewUsers().then((result) => {
    	this.newUsers=result;
    	console.log(this.newUsers);
       console.log(result); 
    }, (err) => {
       console.log(err); 
    });
    
  }
  activateUser(id:string){
  	this.adminService.activateUser(id).then((result) => {
    	for (var i in this.newUsers) {
		  if (this.newUsers[i].id == id) {
		    this.newUsers[i].activated = true;
		  }
		}
    	console.log(this.newUsers);
       console.log(result); 
    }, (err) => {
       console.log(err); 
    });
  }

}
