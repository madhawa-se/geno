import { Component , ViewChild  } from '@angular/core';
import { Nav , Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post';
import { PostListPage } from '../pages/post/post-list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AdminPage } from '../pages/admin/admin';
import { ProfilePage } from '../pages/profile/profile';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public authServiceProvider: AuthServiceProvider) {
    platform.ready().then(() => {
       statusBar.styleDefault();
       splashScreen.hide();
      
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign in', component: LoginPage },
      { title: 'Sign up', component: SignupPage },
      { title: 'Home', component: HomePage },
      { title: 'Profile Page', component: ProfilePage },
    ];
    var self=this;

    this.authServiceProvider.getUser().then(function(user) {
      if(user){

        if(user.is_verified==2 && user.user_type==1){
          self.pages.push({ title: 'Admin', component: AdminPage });
          self.pages.push({ title: 'Post Page', component: PostPage });
          self.pages.push( { title: 'Post Page', component: PostPage  });
          self.pages.push( { title: 'Browse News', component: PostListPage });
        }
        else if(user.is_verified==2 && user.user_type==0){
          self.pages.push( { title: 'Browse News', component: PostListPage });
        }
      }else{


      }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

