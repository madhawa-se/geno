import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonServiceProvider } from '../../providers/common-service/common-service';
/*
  Generated class for the PostServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class BlogModel {
  id       ?: string;
  title    ?: string;
  date    ?: string;
  content   ?: string;
}
@Injectable()
export class PostServiceProvider {

 headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

  constructor(public http: HttpClient,public commonService:CommonServiceProvider) {
    console.log('Hello PostService Provider');
    //this.local = new Storage(LocalStorage);
  }

  getPosts(page:number) {
  	return new Promise(resolve => {
	    this.http.get(this.commonService.REST_URL+'blog/get_blogs/'+page).subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
    });
  }

  createPost(post) {
    return new Promise((resolve, reject) => {

      this.http.post(this.commonService.REST_URL+'blog/create',(post), { headers: this.headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

}
