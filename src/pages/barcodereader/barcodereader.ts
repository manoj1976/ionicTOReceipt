import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {ListPage} from '../list/list';//this is for setroot test 
import{AppService} from '../../services/app.service';
import {SQLite} from 'ionic-native'
import {SQLiteHelperService} from '../../services/sqlitehelper'
import {RegisterPage} from '../../pages/register/register';


/**
 * Generated class for the BarcodereaderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barcodereader',
  templateUrl: 'barcodereader.html',
  providers:[ AppService,SQLiteHelperService,SQLite]
})
export class BarcodereaderPage {
private varTONumber:string;
private varDisable:boolean;

constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner,private appservice:AppService) {
  }


  ionViewDidLoad() {
 //   console.log('ionViewDidLoad BarcodereaderPage');
   if (this.appservice.getBaseServiceURL()===undefined)
      alert('You need to register the App.');
      this.navCtrl.pop();
      this.navCtrl.push(RegisterPage);
  }

btnScan(){
  
  this.barcodeScanner.scan().then((barcodeData) => {
  // Success! Barcode data is here
  //alert('success');
  if (barcodeData.cancelled)
    alert('cancelled');
  else
   // alert(barcodeData.text);
   this.varTONumber=barcodeData.text;
  }, (err) => {
      // An error occurred
      alert('error');
  });
}

btnBack(){
  this.navCtrl.pop();
}

btnSetrootpage(){
  this.navCtrl.setRoot(ListPage)
}

btnGotoListpage(){
  this.navCtrl.push(ListPage)
}

btnReceive(){
  if ((this.varTONumber==undefined) ||(this.varTONumber==null)){
    alert('Please specify the Transfer order no.');return;
  }
  
  this.varDisable=this.appservice.setEnableDisable(true);
  this.appservice.postTransferOrderReceive(this.varTONumber)
  .subscribe(res=>this.onAfterTOReceivePosting(),
        Error=>{
             alert(Error);
             this.varDisable=this.appservice.setEnableDisable(false);
             }
          );
}

onAfterTOReceivePosting(){
  this.varTONumber=null;
  alert('Posted successfully');
  this.varDisable=this.appservice.setEnableDisable(false);
}

}
