import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabRulesPage } from './lab-rules';

@NgModule({
  declarations: [
    LabRulesPage,
  ],
  imports: [
    IonicPageModule.forChild(LabRulesPage),
  ],
})
export class LabRulesPageModule {}
