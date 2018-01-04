import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlaskPage } from './flask';

@NgModule({
  declarations: [
    FlaskPage,
  ],
  imports: [
    IonicPageModule.forChild(FlaskPage),
  ],
})
export class FlaskPageModule {}
