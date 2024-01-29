import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';
 
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {
  data:any;
  class_div:any;
  name:any;
  b:any;
  a:any;
  key="data"

  constructor (private http:HttpClient ){}


  ngOnInit(){
    this.b= sessionStorage.getItem(this.key) || "";
    this.a=this.decrypt(this.b);
    this.data=JSON.parse(this.a)
    //this.data = history.state.data;
    this.name=this.data[0]['name']
    this.class_div=this.data[0]['class_div']
    this.http.get("https://vinitpatil1001.pythonanywhere.com/timetable/?stand="+this.class_div)
   .subscribe((result)=>{
      console.log("result",result)
      this.data=result;
   })

  }
  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }



  
  
}
