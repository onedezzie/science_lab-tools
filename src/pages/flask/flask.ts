import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{FlaskPage} from '../flask/flask';
/**
 * Generated class for the FlaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flask',
  templateUrl: 'flask.html',
})
export class FlaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  flask(){
    this.navCtrl.push(FlaskPage);

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlaskPage');
  }

}
