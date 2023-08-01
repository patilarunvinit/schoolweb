import { Component,Output, OnInit,EventEmitter } from '@angular/core';

import {Router} from '@angular/router' 
import { Location } from '@angular/common';

import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent {
  infodiv:any;
  ttdiv:any;
  attdiv:any;
  test:any;
  username:any;
  data:any;
  name:any;
  mother:any;
  class_div:any;
  roll_no:any;
  reg_no:any;
  mobile_no:any;
  b_day:any;
  address:any;
  image:any;
  fregment:any;
 
  
  
  

  constructor (
    private router:Router,
    private location: Location,
    private http:HttpClient){
      
    }
 
   
 
 
  mainnav(f:any){
    this.fregment=f
    if(this.fregment=="info"){
      this.router.navigateByUrl('slogin#'+ this.fregment);
      this.ttdiv='none';
      this.attdiv='none';
      this.infodiv='block';
      
      
      

    }
    else if (this.fregment=="timetable"){
      this.router.navigateByUrl('slogin#'+ this.fregment);
      this.infodiv='none';
      this.attdiv='none';
      this.ttdiv='block';
    }
    else if (this.fregment=="attandance"){
      this.router.navigateByUrl('slogin#'+ this.fregment);
      this.infodiv='none';
      this.attdiv='block';
      this.ttdiv='none';
    }
 
  }

  dp:string="assets/img/dp.jpg"
  
}













/*
this.data = history.state.data;
    console.log(this.data)
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


*/ 