import { Component,Input } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';




import * as CryptoJS from 'crypto-js';


export class sdatatype 
{ 
  class_div:any;
  name:any;
  roll_no:any;
  option:any;
  teacher_name:any="abc";
  date:any="xyz";
}





@Component({
  selector: 'app-tattendance',
  templateUrl: './tattendance.component.html',
  styleUrls: ['./tattendance.component.css']
})
export class TattendanceComponent {
  sdatatype =new sdatatype()
 
  give:any;
  myatt:any;
  studinfo:any;
  standerd:any;
  studdata:any;
  data:any;
  name:any;
  date:any;
  data123:any;
  maindate:any;
  massage:any;
  selctstand:any;
  checkdata:any;
  checkdate:any;
  maincheckdate:any;
  tNmae:any;
  a:any;
  b:any;
  key="data"
  filterClass:any;
  filterdate:any;
  attandS:any;
  colourG:any;
  colourC:any;
  @Input() DataToInputforMyatt: any | undefined;
  screenWidth: number;
  screenHeight: number;
  width: number;
  maincol: string;
  rowHeight: string;


  

  constructor (private router:Router,private http:HttpClient ){
    this.b= sessionStorage.getItem(this.key) || "";
    this.a=this.decrypt(this.b);
    this.data=JSON.parse(this.a)
    //this.data = history.state.data;
    //console.log(this.data)
    this.name=this.data[0]['name']
    this.tNmae=this.name;
    
     
    /*to call get api for check 1st page form for 1st option  */
    
    this.http.get("https://vinitpatil1001.pythonanywhere.com/tfilterstand/?name="+this.tNmae )
   .subscribe((result)=>{
      console.log("result",result)
      this.filterClass=result;
      console.log(this.filterClass)
   }) 
   
   this.screenWidth = window.innerWidth;
   this.screenHeight = window.innerHeight;


   this.width = (window.innerWidth) ;
   if(this.width<=600){
     this.maincol="1";
     this.rowHeight="50%"
   }
   else{
     this.maincol="2";
     this.rowHeight="75%"

}
window.addEventListener('resize', this.onResize.bind(this));

}

 onResize(event:any) {
   this.width = (window.innerWidth) ;
   if(this.width<=600){
     this.maincol="1";
     this.rowHeight="50%"

   }
   else{
     this.maincol="2";
     this.rowHeight="75%"

   }
 }


 
  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

 
  ngOnInit():void{
    console.log(this.DataToInputforMyatt)
     this.give=this.DataToInputforMyatt['give'];
     this.myatt=this.DataToInputforMyatt['myatt'];
      this.colourG=this.DataToInputforMyatt['colourG'];
      this.colourC=this.DataToInputforMyatt['colourC']
  
   
  }


  optionbu(fregment:any){
    if(fregment=="give"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.give='block';
      this.myatt='none';  
      this.colourG='green';
      this.colourC='rgb(194, 255, 137)';      
      

    }
    else if (fregment=="myatt"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.give='none';
      this.myatt='block';
      this.colourG='rgb(194, 255, 137)';
      this.colourC='green'; 
    }
  }

 
  giveform(data1:any) {
    console.log(data1);

    /*this for to get standerd stud data */
    this.selctstand=data1.standerd
    
    this.http.get("https://vinitpatil1001.pythonanywhere.com/ststudends/?stand="+ this.selctstand )
   .subscribe((result)=>{
      console.log("result",result)
      this.studdata=result;
      console.log(this.studdata)
   }) 

    /*this for date to pass */
    this.date=data1.date
    if (this.date) {
      const dateObject = new Date(this.date);
      const offsetMinutes = dateObject.getTimezoneOffset();
      const adjustedDate = new Date(dateObject.getTime() - offsetMinutes * 60 * 1000);
      this.maindate=adjustedDate.toISOString().substring(0, 10)
    } 


    this.give='none';
    this.studinfo='block';
    this.attandS='none'
     
  }



  attendform(){
    
    
    this.sdatatype=new sdatatype()
    this.data123=this.studdata;    

    for (var index in this.data123) {
      this.data123[index]["date"]=this.maindate;
      this.data123[index]["teacher_name"]=this.name;
         
    }

    this.http.post("https://vinitpatil1001.pythonanywhere.com/attandForS/", this.data123)
    .subscribe((res:any)=>{
      this.massage=res.massage
      alert(this.massage)
      
      
      if (this.massage=="data pass"){
        alert(this.massage)
        this.give='block';
        this.studinfo='none'; 
      }
      else{
        alert(this.massage)
      }
    },
    )  
      console.log(this.data123);
    
    
  }
  

  

  checkform(data2:any) {


    if(data2.standerd=="" && data2.date==""){
      alert("both empty")

    }
    else if(data2.date=="") {
      alert("date empty")
      
    }
    else if( data2.standerd=="") {
      alert("stand empty")
      
    }
     else {
      /*this for to get standerd and date */
    this.selctstand=data2.standerd
    this.checkdate=data2.date

    /*to call get api for give attand page */
    
    this.http.get("https://vinitpatil1001.pythonanywhere.com/attandcheck/?name="+this.tNmae+"&class_div="+this.selctstand+"&date="+this.checkdate )
   .subscribe((result)=>{
      console.log("result",result)
      this.checkdata=result;
      console.log(this.checkdata)
   }) 
    this.myatt='none';
    this.attandS='block'; 
    this.studinfo='none';
      
    }
    

  }


 
  checkstand:any;

  filterstand(data3:any){
    this.checkstand=data3;
    this.http.get("https://vinitpatil1001.pythonanywhere.com/tfilterdate/?name="+this.tNmae+"&class_div="+this.checkstand )
    .subscribe((result)=>{
      this.filterdate=result;
      console.log(this.filterdate)
   })  
  }

  

}



/*
1- to get date in date form

 this.aa = this.checkdate.toISOString();
 this.maincheckdate=this.aa.slice(0,10); 
*/