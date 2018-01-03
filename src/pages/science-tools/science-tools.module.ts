import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScienceToolsPage } from './science-tools';

@NgModule({
  declarations: [
    ScienceToolsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScienceToolsPage),
  ],
})
export class ScienceToolsPageModule {}
