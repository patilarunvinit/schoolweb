import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';


import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-tcomplaint',
  templateUrl: './tcomplaint.component.html',
  styleUrls: ['./tcomplaint.component.css']
})
export class TcomplaintComponent {
  

  raise:any;
  del:any;
  colourR:any;
  colourD:any;
  b:any;
  key="data"
  a:any;
  data:any;
  name:any;
  tName:any;
  filterClass:any;
  TeacherFilterComp:any;
  mobile_no:any;
  
constructor (private router:Router,private http:HttpClient ){
    this.b= sessionStorage.getItem(this.key) || "";
    this.a=this.decrypt(this.b);
    this.data=JSON.parse(this.a)
    this.name=this.data[0]['name']
    this.tName=this.name;
    this.mobile_no=this.data[0]['mobile_no']

    this.http.get("http://127.0.0.1:8000/tfilterstand/?name="+this.tName )
    .subscribe((result)=>{
       console.log("result",result)
       this.filterClass=result;
       console.log(this.filterClass)
    }) 
  
    this.TeachersComAPI()
    

}
decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }


  selctstand:any;
  checkdate:any;
  checkdata:any;



  optionbu(fregment:any){
    if(fregment=="give"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.raise='block';
      this.del='none';  
      this.colourR='green';
      this.colourD='rgb(194, 255, 137)';      
      

    }
    else if (fregment=="myatt"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.raise='none';
      this.del='block';
      this.TeachersComAPI()
      this.colourR='rgb(194, 255, 137)';
      this.colourD='green'; 
    }
  }


  massage:any;
  date:any;
  aa:any;
  maindate:any;

  checkform(datamain:NgForm) {
    const data2 = datamain.value;
    console.log(data2.name)
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
      
      this.selctstand=data2.standerd
      this.checkdate=data2.date
  
      this.date=data2.date
      this.aa = this.date.toISOString();
      this.maindate=this.aa.slice(0,10);
      alert(this.maindate)
      data2["date"]=this.maindate;
  
      this.http.post("http://127.0.0.1:8000/complaintForm/", data2)
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
        console.log(data2);
        datamain.reset();
      
      
    }

    



    
}

  checkstand:any;
  filterdate:any;
  id:any;

  filterstand(data3:any){
    this.checkstand=data3;
    this.http.get("http://127.0.0.1:8000/SFilterByStand/?class_div="+this.checkstand )
    .subscribe((result)=>{
      this.filterdate=result;
      console.log(this.filterdate)
   })  
  }

  deletefun(deldata:any){
    this.id=deldata.id
    this.http.get("http://127.0.0.1:8000/ComDeleteById/?id="+this.id )
    .subscribe((res:any)=>{
      this.massage=res.massage
      alert(this.massage)
      this.TeachersComAPI()
    }) 
  }

  TeachersComAPI(){
    this.http.get("http://127.0.0.1:8000/teacherComp/?teacher_name="+this.tName )
    .subscribe((result)=>{
       console.log("result",result)
       this.TeacherFilterComp=result;
       console.log(this.TeacherFilterComp)
    }) 
  }


  
  


}



/*
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
      
      this.selctstand=data2.standerd
      this.checkdate=data2.date
  
      this.date=data2.date
      this.aa = this.date.toISOString();
      this.maindate=this.aa.slice(0,10);
      alert(this.maindate)
      data2["date"]=this.maindate;
  
      this.http.post("http://127.0.0.1:8000/complaintForm/", data2)
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
        console.log(data2);
        form.reset();
      
      
    }



*/ 