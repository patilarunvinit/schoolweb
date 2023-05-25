import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  display1:any;
  display2:any;
  data:any;
  constructor (private http:HttpClient, ){}
  ngOnInit(){

    this.http.get("http://127.0.0.1:8000/timetable/")
   .subscribe((result)=>{
      console.log("result",result)
      this.data=result;
   })
    
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
