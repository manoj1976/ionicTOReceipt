import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService} from '../../services/app.service';
import {SQLite} from 'ionic-native'
import { SQLiteHelperService} from '../../services/sqlitehelper'

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[AppService,SQLiteHelperService,SQLite]
})

export class RegisterPage {
private varRegEmail:string;
private varDisable:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private appservice:AppService) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegisterPage');
  }

  btnSubmit(){
    if ((this.varRegEmail==undefined) ||(this.varRegEmail==null)){
    alert('Please specify the e-mail.');return;
  }
  let t={ServiceBaseURL:'xxx.com',DeviceID:1,RegDate:'30/07/17',RegTime:'10:00:00',CompID:'MAN',CompName:'ProStrategy'};
this.onAfterRegister(t);
  /*
  this.varDisable=this.appservice.setEnableDisable(true);
  this.appservice.appRegistration(this.varRegEmail)
  .subscribe(res=>this.onAfterRegister(res),
        Error=>{
             alert(Error);
             this.varDisable=this.appservice.setEnableDisable(false);
             }
          );
            */
  }

onAfterRegister(res){
  this.appservice.writeRegistrationInfo(res);
  //alert('Registered successfully');
  //this.navCtrl.pop();
}

}
