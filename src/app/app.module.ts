import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import {LabPage} from '../pages/lab/lab';
import {ScienceToolsPage} from '../pages/science-tools/science-tools';
import {FlaskPage} from '../pages/flask/flask';
import { ThermometerPage } from '../pages/thermometer/thermometer';
import { BeakerPage } from '../pages/beaker/beaker';
import { MyApp } from './app.component';
import { TripodStandPage } from '../pages/tripod-stand/tripod-stand';
<<<<<<< HEAD
=======

>>>>>>> 7de5a96bfa71633c93c4e0ce679fd3bedb3e49bc
import { CylinderPage } from '../pages/cylinder/cylinder';
import { TestTubePage } from '../pages/test-tube/test-tube';
import { EvaluationPage } from '../pages/evaluation/evaluation';
import { AboutPage } from '../pages/about/about';
import { PipettePage } from '../pages/pipette/pipette';



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
    CylinderPage,
    TestTubePage,
    AboutPage,
    PipettePage

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
    CylinderPage,
    TestTubePage,
    EvaluationPage,
    AboutPage,
    PipettePage

  ],
  providers: [
    StatusBar,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
