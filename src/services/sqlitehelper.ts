import {Injectable } from '@angular/core';
import{SQLite} from 'ionic-native'

declare var window : any;
@Injectable()
export class SQLiteHelperService{

    private serviceBaseURL:string;private serviceAppRegBaseURL:string;

    private _createSettingTbl:string='create table if not exists settings(id integer primary key not null,serviceBaseURL TEXT,deviceID TEXT,regDate TEXT,regTime TEXT,companyID TEXT,companyName TEXT)';
    private _readSettingsSQL:string='Select serviceBaseURL from settings where id=1';
    private _insertSettingsSQL:string='Insert into settings (id, serviceBaseURL, deviceID, regDate, regTime, companyID, companyName) values(';
    private _deleteSettingTbl:string="Delete from settings";    
    private _dropSettingTbl:string="Drop table if exists settings";

    constructor(private db:SQLite ){
        this.openDatabase();
        
    }

    openDatabase(){
        let dbOptions={ name: "toAppData.db", location: 'default'};
        this.db.openDatabase(dbOptions)
        .catch(er=>alert('ERROR:Database open.'))
        .then(ms=>{
            this.createTable(this._createSettingTbl).catch(er=>alert('ERROR:Create Table.'))
            .then(ms=>this.readSettings());
            
        });
    }

    createTable(_cmd:string){
      return  this.db.executeSql(_cmd,[]);
    }

    dropSettingTable(){
        /*return this.executeSQL(this._deleteSettingTbl)
        .catch(err=>alert('ERROR:Drop table.'))
        .then(msg=>alert('Settings are deleted'));
*/
        return this.db.executeSql(this._deleteSettingTbl,[])
        .catch(err=>alert('ERROR:Drop table.'))
        .then(msg=>alert('Settings are deleted'));
    }

    insert(){
        
    }

    executeSQL(_cmd:string){
      return  this.db.executeSql(_cmd,[]);
    } 

    readSettings(){
        //this.serviceBaseURL='http://nav2017new1.northeurope.cloudapp.azure.com/WMSApi/';
        this.serviceAppRegBaseURL='http://nav2017new1.northeurope.cloudapp.azure.com/WMSApi/';
        return this.db.executeSql(this._readSettingsSQL,[])
        .catch(err=>alert('ERROR:Read table.'))
        .then(response=>{
            
            let varRegRequired=false;
            if (response==undefined) varRegRequired =true;
            if (response==null) varRegRequired =true;
            if (response.rows==undefined) varRegRequired=true;
            if (response.rows==null) varRegRequired=true;
            if ((!varRegRequired) && (response.rows.length==0)) varRegRequired=true;
            
            for(let i=0;i<response.rows.length;i++){
                this.serviceBaseURL=response.rows.item(i).serviceBaseURL;
            }
        }
        );
    
    }

    writeRegistrationInfo(data){
        let str1:string;
        this.executeSQL(this._deleteSettingTbl)
        .catch(err=>alert('ERROR:Delete table.'))
        .then(msg=>{
            str1=this._insertSettingsSQL+"1,'"+data.ServiceBaseURL+"','"+data.DeviceID+"','"+data.RegDate+"','"+data.RegTime+"','"+data.CompID+"','"+data.CompName+"')";
            this.executeSQL(str1)
            .catch(err=>alert('ERROR:Write table'))
            .then(msg=>alert('Registered successfully.'));
        }
        );
    }

    update(){}

    delete(){

    }

    getBaseServiceBaseURL(){
        return this.serviceBaseURL
    }

    getBaseAppRegServiceBaseURL(){
        return this.serviceAppRegBaseURL;
    }

}
