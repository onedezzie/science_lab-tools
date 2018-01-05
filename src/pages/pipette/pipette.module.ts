import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipettePage } from './pipette';

@NgModule({
  declarations: [
    PipettePage,
  ],
  imports: [
    IonicPageModule.forChild(PipettePage),
  ],
})
export class PipettePageModule {}
