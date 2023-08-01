import { Component } from '@angular/core';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent {
 
  infodiv:any;
  ttdiv:any;
  attdiv:any;
  test:any;
  tattan:any;
  data:any;
  tName:any;

  constructor (private router:Router){
    
  }

  mainnav(fregment:any){
    if(fregment=="tinfo"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.ttdiv='none';
      this.infodiv='block';
      this.tattan='none'     
      
      

    }
    else if (fregment=="timetable"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.infodiv='none';
      this.ttdiv='block';
      this.tattan='none'
    }
    else if (fregment=="attendance"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.infodiv='none';
      this.ttdiv='none';
      this.tattan='block'
    }
 
  }


}
