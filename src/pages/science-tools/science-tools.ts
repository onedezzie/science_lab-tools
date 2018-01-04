import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{FlaskPage} from '../flask/flask';
import { ThermometerPage } from '../thermometer/thermometer';
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
  
    ionViewDidLoad() {
    console.log('ionViewDidLoad ScienceToolsPage');
  }

}
