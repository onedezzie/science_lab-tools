import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeakerPage } from './beaker';

@NgModule({
  declarations: [
    BeakerPage,
  ],
  imports: [
    IonicPageModule.forChild(BeakerPage),
  ],
})
export class BeakerPageModule {}
