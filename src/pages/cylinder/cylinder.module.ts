import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CylinderPage } from './cylinder';

@NgModule({
  declarations: [
    CylinderPage,
  ],
  imports: [
    IonicPageModule.forChild(CylinderPage),
  ],
})
export class CylinderPageModule {}
