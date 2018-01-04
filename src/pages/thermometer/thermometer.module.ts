import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThermometerPage } from './thermometer';

@NgModule({
  declarations: [
    ThermometerPage,
  ],
  imports: [
    IonicPageModule.forChild(ThermometerPage),
  ],
})
export class ThermometerPageModule {}
