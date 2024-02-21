import { Component, OnInit,Input  } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Router} from '@angular/router' 
import {ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';



import {CookieService} from 'ngx-cookie-service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  display1:any;
  display2:any;
  data:any;
  errors:any;
  breakpoint:any;
  cols:any;
  erpcols:any;
  width:any;
  footcols:any;
  colspan1:any;
  colspan2:any;
  rowHeight:any;
  massage:any;
  username:any;
  name:any;
  mother:any;
  class_div:any;
  roll_no:any;
  reg_no:any;
  mobile_no:any;
  b_day:any;
  address:any;
  image:any;
  navclose:any;
  navicon:any;


 
  

  constructor (
    private http:HttpClient,
    private Router:Router,
    private route: ActivatedRoute,
    private cookieService: CookieService )
    {}

  screenWidth:any;
  screenHeight:any;
  ngOnInit(){


    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;


    this.width = (window.innerWidth) ;
    if(this.width<=600){
      this.cols="1";
      this.erpcols="1";
      this.footcols="1";
      this.colspan1="1";
      this.colspan2="1";
      this.rowHeight="2:1";


    }
    else{
      this.cols="3";
      this.erpcols="2";
      this.footcols="5";
      this.colspan1="1";
      this.colspan2="2";
      this.rowHeight="80%"
 }
 window.addEventListener('resize', this.onResize.bind(this));

}

  onResize(event:any) {
    this.width = (window.innerWidth) ;
    if(this.width<=600){
      this.cols="1";
      this.erpcols="1";
      this.footcols="1";
      this.colspan1="1";
      this.colspan2="1";
      this.rowHeight="2:1";


    }
    else{
      this.cols="3";
      this.erpcols="2";
      this.footcols="5";
      this.colspan1="1";
      this.colspan2="2";
      this.rowHeight="80%";


    }
  }
  
  dis1() { 
    
    this.display1='block'
    this.display2='none'
    
  }
  dis2() { 
    
  this.display2='block'
  this.display1='none'
  
  }
  close1() { 
    
  this.display2='none'
  this.display1='none'
  
  }



closenavf() { 
    this.navclose='none';
    
}
opennav(){ 
      this.navclose='block';

      
}



  nav(fregment:any){
    this.Router.navigateByUrl('#'+ fregment)
 
  }

  /* for Crypto a data in storage */ 
  key="data";
  encrypt(txt:any): string {
      return CryptoJS.AES.encrypt(txt, this.key).toString();
  }


  studentlogin(data:any) {
    // console.log(data);
    this.http.post("https://vinitpatil1001.pythonanywhere.com/slogin/", data)
    .subscribe((res:any)=>{
      this.data=res
      this.massage=res.massage
      this.data=res.Sdata
     console.log(this.data)
      if(this.data[0].username=='freasher2'){
        alert('new user')
      }
      
      alert(this.massage)
      if(this.massage=="logged in successfuly"){

        /*for session Storage */
        sessionStorage.setItem(this.key,this.encrypt(JSON.stringify(this.data)))

        this.Router.navigate(['slogin'])
      }
    },
    (error:any) => {
      console.log(error)
      this.errors = error;
      alert(this.errors.error.error)
    },
    
    )  
    
  }


  

  teacherlogin(data:any) {
    console.log(data);
    this.http.post("https://vinitpatil1001.pythonanywhere.com/tlogin/", data)
    .subscribe((res:any)=>{
      this.data=res
      this.massage=res.massage
      this.data=res.Sdata
      alert(this.massage)
      if(this.massage=="logged in successfuly"){
        sessionStorage.setItem(this.key,this.encrypt(JSON.stringify(this.data)))

        this.Router.navigate(['tlogin'])
      }
    },
    (error:any) => {
      console.log(error)
      this.errors = error;
      alert(this.errors.error.error)
    },
    
    )  
   

  }



  contactfrom(datamain:NgForm){
    const data2 = datamain.value;
    console.log(data2)
    if(data2.name=="" && data2.email=="" && data2.massage==""){
      alert("Data empty")

    }
    else if(data2.name=="") {
      alert("Name Empty")
      
    }
    else if( data2.valid) {
      alert("Email Empty")
      
    }
    else if( data2.massage=="") {
      alert("Massage Empty")
      
    }
    else {
      this.http.post("https://vinitpatil1001.pythonanywhere.com/contact/", data2)
      .subscribe((res:any)=>{
        this.massage=res.massage
        alert(this.massage)
        
        
        if (this.massage=="data pass"){
          alert(this.massage)
           
        }
        else{
          alert(this.massage)
        }
      },
      )  
        
        datamain.reset();
      
      
    }
  }


  backphoto:string="assets/img/back.jpg"
  learning:string="assets/img/learning.png"
  event:string="assets/img/event.png" 
  teacher:string="assets/img/teacher.png"
  student:string="assets/img/student.jpg"
  techererp:string="assets/img/teachererp.jpg"
  s1:string="assets/img/s1.jpg"
  s2:string="assets/img/s2.jpg"
  s3:string="assets/img/s3.jpg"
  logo:string="assets/img/logo1.png"
  video1:string="assets/video/video_main1.mp4"
  viddiv:string="assets/img/viddiv.jpg"







}



/*
1- for cookis
this.cookieService.set('data1',JSON.stringify(this.data));

2-to decrypt
 private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

2- to get data back and delete

 public getData(key: string) {
    let data = localStorage.getItem(key) || "";
    return this.decrypt(data);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }



  4- route data to next page
   this.Router.navigate(['slogin'], { state: { data: this.data },
        replaceUrl: true })
*/