import { Component,Output, OnInit,EventEmitter } from '@angular/core';

import {Router} from '@angular/router' 
import { Location } from '@angular/common';

import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



import * as CryptoJS from 'crypto-js';




@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent {
  infodiv:any;
  ttdiv:any;
  attdiv:any;
  notdiv:any;
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
  colourI:any;
  colourT:any;
  colourA:any;
  colourB:any;
  colourN:any;
  b:any;
  a:any;
  data1:any;
  notificationCount:any;
  
 
  

  constructor (
    private router:Router,
    private location: Location,
    private http:HttpClient,
    private Router:Router,
    private route: ActivatedRoute,){

       

      this.b= sessionStorage.getItem(this.key) || "";
      this.a=this.decrypt(this.b);
      this.data1=JSON.parse(this.a)
      this.name=this.data1[0]['name']
      this.class_div=this.data1[0]['class_div']
      


      this.http.get("http://127.0.0.1:8000/notificationSdata/?name="+this.name+"&class_div="+this.class_div)
     .subscribe((result)=>{
        console.log("result",result)
        this.data=result;
        this.notificationCount=this.data['noticount']
     })
      
    }

    decrypt(txtToDecrypt: string) {
      return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
    }
 
    
    ngOnInit() {
      this.route.fragment.subscribe((fragment123: any) => {
        if(fragment123=="info"){
          this.navigateToFragment('info');
          this.ttdiv='none';
          this.attdiv='none';
          this.infodiv='block';
          this.notdiv='none';
          this.colourI='rgb(84, 115, 255)';
          this.colourT='skyblue';
          this.colourA='skyblue';   
          this.colourB='skyblue'; 
          this.colourN='skyblue';  
        
        }
        else if (fragment123=="timetable"){
          this.navigateToFragment('timetable');
          this.infodiv='none';
          this.attdiv='none';
          this.ttdiv='block';
          this.notdiv='none';
          this.colourI='skyblue';
          this.colourT='rgb(84, 115, 255)';
          this.colourA='skyblue';   
          this.colourB='skyblue'; 
          this.colourN='skyblue';
        }
        else if (fragment123=="attandance"){
          this.navigateToFragment('attandance');
          this.infodiv='none';
          this.attdiv='block';
          this.ttdiv='none';
          this.notdiv='none';
          this.colourI='skyblue';
          this.colourT='skyblue';
          this.colourA='rgb(84, 115, 255)';   
          this.colourB='skyblue'; 
          this.colourN='skyblue';
        }
    
    
        else if (fragment123=="notification"){
          this.navigateToFragment('notification');
          this.infodiv='none';
          this.attdiv='none';
          this.ttdiv='none';
          this.notdiv='block';
          this.colourI='skyblue';
          this.colourT='skyblue';
          this.colourA='skyblue';   
          this.colourB='skyblue'; 
          this.colourN='rgb(84, 115, 255)';
    
          //this.reloadCurrentRoute()
        }
      });
    }
    
   
 
 
  mainnav(fragment:any){
    if(fragment=="info"){
      this.navigateToFragment('info');
      this.ttdiv='none';
      this.attdiv='none';
      this.infodiv='block';
      this.notdiv='none';
      this.colourI='rgb(84, 115, 255)';
      this.colourT='skyblue';
      this.colourA='skyblue';   
      this.colourB='skyblue'; 
      this.colourN='skyblue';  
    
    }
    else if (fragment=="timetable"){
      this.navigateToFragment('timetable');
      this.infodiv='none';
      this.attdiv='none';
      this.ttdiv='block';
      this.notdiv='none';
      this.colourI='skyblue';
      this.colourT='rgb(84, 115, 255)';
      this.colourA='skyblue';   
      this.colourB='skyblue'; 
      this.colourN='skyblue';
    }
    else if (fragment=="attandance"){
      this.navigateToFragment('attandance');
      this.infodiv='none';
      this.attdiv='block';
      this.ttdiv='none';
      this.notdiv='none';
      this.colourI='skyblue';
      this.colourT='skyblue';
      this.colourA='rgb(84, 115, 255)';   
      this.colourB='skyblue'; 
      this.colourN='skyblue';
    }


    else if (fragment=="notification"){
      this.navigateToFragment('notification');
      this.infodiv='none';
      this.attdiv='none';
      this.ttdiv='none';
      this.notdiv='block';
      this.colourI='skyblue';
      this.colourT='skyblue';
      this.colourA='skyblue';   
      this.colourB='skyblue'; 
      this.colourN='rgb(84, 115, 255)';

      //this.reloadCurrentRoute()
    }
 
 
  }
  navigateToFragment(fragment: string): void {
    this.location.replaceState('slogin', '#' + fragment);
    //this.router.navigate(['/slogin'], { fragment: this.fragment });
    //this.location.go(`/slogin#${fragment}`);
    //location.hash = fragment;
  }

  reloadCurrentRoute() {
    location.reload();
    
  }


  key="data"

  logout(){
       
    sessionStorage.removeItem(this.key)
    this.Router.navigate([''])
  }


 


  dp:string="assets/img/dp.jpg";
  notificationImg:string="assets/img/notification.png"

  
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