import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LabPage} from '../lab/lab';
import {ScienceToolsPage} from '../science-tools/science-tools';
import { EvaluationPage } from '../evaluation/evaluation';
import { AboutPage } from '../about/about';



/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {


  constructor( public navCtrl: NavController, public navParams: NavParams) {
    
  }

gotoLab(){
  this.navCtrl.push(LabPage);
}
evaluation(){
  this.navCtrl.push(EvaluationPage);
}
tools(){
  this.navCtrl.push(ScienceToolsPage);
}
about(){
  this.navCtrl.push(AboutPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
