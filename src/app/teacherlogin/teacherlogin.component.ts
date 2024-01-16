import { Component } from '@angular/core';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent {
 
  infodiv:any;
  comdiv:any;
  attdiv:any;
  test:any;
  tattan:any;
  data:any;
  tName:any;
  colourI:any;
  colourC:any;
  colourA:any;
  colourL:any;

  constructor (private router:Router,
    private Router:Router,){
    
    
  }

  mainnav(fregment:any){
    if(fregment=="tinfo"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.comdiv='none';
      this.infodiv='block';
      this.tattan='none';
      this.colourI='green';
      this.colourC='rgb(194, 255, 137)';
      this.colourA='rgb(194, 255, 137)';
      this.colourL='rgb(194, 255, 137)';
      
      

    }
    else if (fregment=="attendance"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.infodiv='none';
      this.comdiv='none';
      this.tattan='block';
      this.colourI='rgb(194, 255, 137)';
      this.colourC='rgb(194, 255, 137)';
      this.colourA='green';
      this.colourL='rgb(194, 255, 137)';
    }
    else if (fregment=="tcomplaint"){
      this.router.navigateByUrl('tlogin#'+ fregment);
      this.infodiv='none';
      this.comdiv='block';
      this.tattan='none'
      this.colourI='rgb(194, 255, 137)';
      this.colourC='green';
      this.colourA='rgb(194, 255, 137)';
      this.colourL='rgb(194, 255, 137)';
    }
 
  }


  key="data"

  logout(){
       
    sessionStorage.removeItem(this.key)
    this.Router.navigate([''])
  }

}
