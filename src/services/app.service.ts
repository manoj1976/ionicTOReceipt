import {Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {SQLiteHelperService} from '../services/sqlitehelper'

@Injectable()
export class AppService{
//private baseURL='http://nav2017new1.northeurope.cloudapp.azure.com/WMSApi/';
private baseURL=this.sqlitehelperSvc.getBaseServiceBaseURL();

constructor(private http:Http,private sqlitehelperSvc:SQLiteHelperService){
}

postTransferOrderReceive(parTONumber){

    //this.url=this.dbservice.serviceBaseURL+'api/MobileRequest';
    let url=this.baseURL+'api/MobileRequest/TransferOrderHandler';
//let url='http://date.jsontest.com';
var paramData = {
 docno:parTONumber,
 action:'Receive',
 navSOAPURL:''
};
/*
var config = {
 params: data,
 headers : {'Accept' : 'application/json'}
};
*/
    return this.http.get(url,  {params:paramData})
            .map(res=>res.json());

}
getBaseServiceURL(){
    this.sqlitehelperSvc.getBaseServiceBaseURL();
}

setEnableDisable(parEnableDisable){
    return parEnableDisable;
}

appRegistration(parRegEmail){
    let url=this.sqlitehelperSvc.getBaseAppRegServiceBaseURL()+'api/MobileRequest/AppRegistration';
    var paramData = {
    regemail:parRegEmail,
    appid:'TOReceipt',
    navSOAPURL:''

    };
        return this.http.get(url,  {params:paramData})
                .map(res=>res.json());
}

writeRegistrationInfo(data){
    this.sqlitehelperSvc.writeRegistrationInfo(data);
}

dropSettingTable(){
    this.sqlitehelperSvc.dropSettingTable();
}

postJSON(){

}
}

