import { Component, } from '@angular/core';
import {Router} from '@angular/router' 

import {HttpClient} from '@angular/common/http';

import {CookieService} from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';






@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {


  username:any;
  data:any;
  name:string;
  mother:string;
  class_div:string;
  roll_no:string;
  reg_no:string;
  mobile_no:string;
  b_day:string;
  address:string;
  image:string;
  a:any;
  b:any;
  key="data"
 
  

  constructor (
    private router:Router,
    private http:HttpClient,
    private cookieService: CookieService,
    private Router:Router,
    )
    {
      this.b= sessionStorage.getItem(this.key) || "";
      this.a=this.decrypt(this.b);
      this.data=JSON.parse(this.a)
     //this.data = history.state.data;
     // console.log(this.data)
     // console.log(this.data[0])
      this.username=this.data[0]['username']
      this.name=this.data[0]['name']
      this.mother=this.data[0]['mother']
      this.class_div=this.data[0]['class_div']
      this.roll_no=this.data[0]['roll_no']
      this.reg_no=this.data[0]['reg_no']
      this.mobile_no=this.data[0]['mobile_no']
      this.b_day=this.data[0]['b_day']
      this.address=this.data[0]['address']
      this.image=this.data[0]['image']


    
     
  }
 
  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }


  
 

  dp:string="assets/img/dp.jpg"
  dp1:string="assets/img/studdp.jpg"
  s1:string="assets/img/s1.jpg"

}
