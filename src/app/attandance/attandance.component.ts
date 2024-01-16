import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-attandance',
  templateUrl: './attandance.component.html',
  styleUrls: ['./attandance.component.css'],
  providers: [DatePipe]
})
export class AttandanceComponent {

  name:any;
  class_div:any;
  list=['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th',
  '11th','12th','13th','14th','15th','16th','17th','18th','19th','20th',
  '21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st']




  Sdate:any;
  Dateget:any;
  Formonth:any;
  jan:any;
  feb:any;
  mar:any;
  apr:any;
  may:any;
  jun:any;
  jul:any;
  aug:any;
  sept:any;
  oct:any;
  nov:any;
  des:any;
  StudAttData:any;
  b:any;
  c:any;
  percentageCAl:any;
  x:any;
  y:any;
  key="data"
  data:any;
 

  constructor (private http:HttpClient,private datePipe: DatePipe ){
 
     
      this.x= sessionStorage.getItem(this.key) || "";
      this.y=this.decrypt(this.x);
      this.data=JSON.parse(this.y)
      //this.data = history.state.data;
      //console.log(this.data)
      this.name=this.data[0]['name']
      this.class_div=this.data[0]['class_div']
      
      
    


    

    this.http.get("http://127.0.0.1:8000/Sattendence/?name="+this.name+"&class_div="+this.class_div )
   .subscribe((result)=>{
      this.StudAttData=result;
   }) 
    
   this.http.get("http://127.0.0.1:8000/percentageCAl/?name="+this.name+"&class_div="+this.class_div )
   .subscribe((result)=>{
      this.percentageCAl=result;
   }) 
   

  }
  

  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
  
  test(a:string):void{
    //alert(a)
    this.b = new Date(a);
    this.c = this.datePipe.transform(this.b, 'yyyy-MM-dd') || '';
    
    return this.c

  }

  isWeekend(Sdate:any) {
    //alert(Sdate)
    this.Dateget=new Date(Sdate)
    //alert(this.Dateget.getMonth())
    this.Formonth=this.Dateget.getMonth()
    if(this.Formonth==0){
      this.jan=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0
    }
    else if(this.Formonth==1){
      this.feb=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==2){
      this.mar=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==3){
      this.apr=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==4){
      this.may=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==5){
      this.jun=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==6){
      this.jul=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==7){
      this.aug=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==8){
      this.sept=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==9){
      this.oct=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==10){
      this.nov=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    else if(this.Formonth==11){
      this.des=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0

    }
    
    //this.testp=this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0
    //alert(this.Dateget.getDay() === 6 || this.Dateget.getDay() === 0)
   
  }


  
}
