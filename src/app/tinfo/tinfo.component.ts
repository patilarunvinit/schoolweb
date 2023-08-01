import { Component } from '@angular/core';

import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-tinfo',
  templateUrl: './tinfo.component.html',
  styleUrls: ['./tinfo.component.css']
})
export class TinfoComponent {

  username:any;
  data:any;
  name:any;
  mother:any;
  employe_id:any;
  mobile_no:any;
  b_day:any;
  address:any;
  image:any;
  a:any;
  b:any;
  key="data"
 

  constructor (){
    this.b= sessionStorage.getItem(this.key) || "";
    this.a=this.decrypt(this.b);
    this.data=JSON.parse(this.a)
    //this.data = history.state.data;
    //console.log(this.data)
    this.username=this.data[0]['username']
    this.name=this.data[0]['name']
    this.mother=this.data[0]['mother']
    this.employe_id=this.data[0]['employe_id']
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
