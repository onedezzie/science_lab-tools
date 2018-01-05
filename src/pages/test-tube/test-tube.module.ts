import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestTubePage } from './test-tube';

@NgModule({
  declarations: [
    TestTubePage,
  ],
  imports: [
    IonicPageModule.forChild(TestTubePage),
  ],
})
export class TestTubePageModule {}
