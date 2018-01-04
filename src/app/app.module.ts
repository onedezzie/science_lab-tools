import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {LabPage} from '../pages/lab/lab';
import {ScienceToolsPage} from '../pages/science-tools/science-tools';
import {FlaskPage} from '../pages/flask/flask';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    LabPage,
    ScienceToolsPage,
    FlaskPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LabPage,
    ScienceToolsPage,
    FlaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
