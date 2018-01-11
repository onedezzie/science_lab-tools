import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{FlaskPage} from '../flask/flask';
import { ThermometerPage } from '../thermometer/thermometer';
import { BeakerPage } from '../beaker/beaker';
import { TripodStandPage } from '../tripod-stand/tripod-stand';

import { PipettePage } from '../pipette/pipette';

import { CylinderPage } from '../cylinder/cylinder';
import { TestTubePage } from '../test-tube/test-tube';
/**
 * Generated class for the ScienceToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science-tools',
  templateUrl: 'science-tools.html',
})
export class ScienceToolsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  flask(){
    this.navCtrl.push(FlaskPage);
  }

  // this is method- thermometer
  thermometer(){
    this.navCtrl.push(ThermometerPage);
  }
  
  //this is method- beaker
  beaker(){
    this.navCtrl.push(BeakerPage);
  }

  //this is method method-tripod stand
  tripodStand(){

    this.navCtrl.push(TripodStandPage);
  }
 
  
  pipette(){
    this.navCtrl.push(PipettePage);
    }

  //this is method -cylinder
  cylinder(){
    this.navCtrl.push(CylinderPage);
  }

  //this is codes method testtub
  testTube(){
    this.navCtrl.push(TestTubePage);
  }
master
    ionViewDidLoad() {
    console.log('ionViewDidLoad ScienceToolsPage');
  }

}
