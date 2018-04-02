import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { ProfilePage } from '../pages/profile/profile';

import { SignupPage } from '../pages/signup/signup';
import { SignupEmailPage } from '../pages/signup/signup-email';
import { SignupPasswordPage } from '../pages/signup/signup-password';
import { ProfileCompletePage } from '../pages/signup/profile-complete';

import { PostPage } from '../pages/post/post';
import { PostListPage } from '../pages/post/post-list';
import { PostViewPage } from '../pages/post/post-view';


import { AdminPage } from '../pages/admin/admin';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PostServiceProvider } from '../providers/post-service/post-service';
import { CommonServiceProvider } from '../providers/common-service/common-service';
import { AdminServiceProvider } from '../providers/admin-service/admin-service';
import { FCM } from '@ionic-native/fcm';
import { FcMserviceProvider } from '../providers/fc-mservice/fc-mservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SignupEmailPage,
    SignupPasswordPage,
    ProfileCompletePage,
    PostPage,
    PostListPage,
    PostViewPage,
    AdminPage,
    ProfilePage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
      SignupPage,
      SignupEmailPage,
      SignupPasswordPage,
      ProfileCompletePage,
      PostPage,
      PostListPage,
      PostViewPage,
      AdminPage,
      ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FCM,
    AuthServiceProvider,
    PostServiceProvider,
    CommonServiceProvider,
    AdminServiceProvider,
    FcMserviceProvider,

  ]
})
export class AppModule {}
