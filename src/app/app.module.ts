import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {LabPage} from '../pages/lab/lab';
import {ScienceToolsPage} from '../pages/science-tools/science-tools';
import {FlaskPage} from '../pages/flask/flask';
import { ThermometerPage } from '../pages/thermometer/thermometer';
import { BeakerPage } from '../pages/beaker/beaker';
import { MyApp } from './app.component';
import { TripodStandPage } from '../pages/tripod-stand/tripod-stand';

import { PipettePage } from '../pages/pipette/pipette';

import { CylinderPage } from '../pages/cylinder/cylinder';
import { TestTubePage } from '../pages/test-tube/test-tube';
import { EvaluationPage } from '../pages/evaluation/evaluation';


@NgModule({
  declarations: [
    MyApp,
    LabPage,
    ScienceToolsPage,
    FlaskPage,
    ThermometerPage,
    BeakerPage,
    TripodStandPage,
    EvaluationPage,

    PipettePage,

    CylinderPage,
    TestTubePage

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
    FlaskPage,
    ThermometerPage,
    BeakerPage,
    TripodStandPage,

    PipettePage,

    CylinderPage,
    TestTubePage,
    EvaluationPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
