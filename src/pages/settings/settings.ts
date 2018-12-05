import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from '../../services/app.service';
import {SQLite} from 'ionic-native'
import {SQLiteHelperService} from '../../services/sqlitehelper'
import {RegisterPage} from '../../pages/register/register';


/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers :[AppService,SQLite,SQLiteHelperService]
  
})
export class SettingsPage {
private varNAVSOAPURL:string='';private varWebAPIURL;

  constructor(public navCtrl: NavController, public navParams: NavParams,private appservice:AppService) {
    this.varWebAPIURL=this.appservice.getBaseServiceURL();
   
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad SettingsPage');
    if (this.varWebAPIURL===undefined)
      alert('You need to register the App.');
      this.navCtrl.pop();
      this.navCtrl.push(RegisterPage);
  }

btnDeleteSetting(){
  this.appservice.dropSettingTable();
}

}
