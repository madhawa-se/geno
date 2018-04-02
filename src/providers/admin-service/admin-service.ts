import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonServiceProvider } from '../../providers/common-service/common-service';
/*
  Generated class for the AdminServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminServiceProvider {

  constructor(public http: HttpClient,public commonService:CommonServiceProvider) {
    console.log('Hello AdminServiceProvider Provider');
  }


  getNewUsers() {
  	return new Promise(resolve => {
	    this.http.get(this.commonService.REST_URL+'admin/get_new_users').subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
    });
  }


  activateUser(id:string){
  	return new Promise(resolve => {
	    this.http.get(this.commonService.REST_URL+'admin/activate_user/'+id).subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
    });
  }


}


