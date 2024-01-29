import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-snotification',
  templateUrl: './snotification.component.html',
  styleUrls: ['./snotification.component.css']
})
export class SnotificationComponent {
  b:any;
  a:any;
  key='data'
  data:any;
  name:any;
  class_div:any;
  popupdiv:any;
  complaint_date:any;
  daysPassed: any;
  hoursPassed: any;
  minutesPassed: any;
  agotime:any;
  filtervalue:any;


  



  constructor (private http:HttpClient){

    this.b= sessionStorage.getItem(this.key) || "";
    this.a=this.decrypt(this.b);
    this.data=JSON.parse(this.a)
    //this.data = history.state.data;
    this.name=this.data[0]['name']
    this.class_div=this.data[0]['class_div']
   


    this.TeachersComAPI()
  }

  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }



  TeacherFilterComp:any;
  maindata:any;

  

  TeachersComAPI(){
    this.http.get("https://vinitpatil1001.pythonanywhere.com/notificationSdata/?name="+this.name+"&class_div="+this.class_div)
    .subscribe((result)=>{
       console.log("result",result)
       this.maindata=result;
       this.TeacherFilterComp=this.maindata['data'];
    }) 
  }
  close1(){
    this.popupdiv="none";
    this.filtervalue="none";
  }

 
  tNameP:any;
  dateP:any;
  idP:any;
  complaintP:any;
  mobile_no:any;


  test(complaint_d:any){
      //this.complaint_date=val.complaint_date1
      //this.complaint_date = '2024-01-17T11:20:57.296041Z';

      const originalDate = new Date(complaint_d);
      const currentDate = new Date();

      const timeDifference = currentDate.getTime() - originalDate.getTime();
      this.daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hoursPassed = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutesPassed = Math.floor(timeDifference / (1000 * 60));
      if (this.daysPassed == 0){
        if (this.hoursPassed == 0){
          this.agotime=this.minutesPassed+" Min Ago"
          return this.agotime

        }
        else{
          this.agotime=this.hoursPassed+" Hour Ago"
          return this.agotime
        }

      }
      else{
        this.agotime=this.daysPassed+" Days Ago"
        return this.agotime

      }
      
  }

  popupON(IdforShortNoti:any){
    
    for (var val of this.maindata['data']) {

      if (val.id == IdforShortNoti){
        this.tNameP=val.teacher_name
        this.dateP=val.date
        this.idP=val.id
        this.complaintP=val.complaint
        this.mobile_no=val.mobile_no
        this.complaint_date=val.complaint_date1
        //this.complaint_date = '2024-01-17T11:20:57.296041Z';

        this.test(this.complaint_date)

      } 
    }
    this.popupdiv="block";
    this.filtervalue="blur(5px)";
    
  }
}
