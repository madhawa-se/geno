import { Injectable } from '@angular/core';

/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServiceProvider {
  //public REST_URL:string = 'http://localhost/instantfeed/';
  public REST_URL:string = 'http://slcog.lk/instantfeed/';


  constructor() {
    console.log('Hello CommonServiceProvider Provider');
  }

}
