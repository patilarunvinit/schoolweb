import { Component } from '@angular/core';
import {Router} from '@angular/router' 

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


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
    private location: Location,
    private Router:Router,   
    private route: ActivatedRoute,){
    
    
  }


  ngOnInit() {
    this.route.fragment.subscribe((fragment123: any) => {
      //alert(fragment123)
      if(fragment123=="tinfo"){
        this.navigateToFragment('tinfo');
        this.comdiv='none';
        this.infodiv='block';
        this.tattan='none';
        this.colourI='green';
        this.colourC='rgb(194, 255, 137)';
        this.colourA='rgb(194, 255, 137)';
        this.colourL='rgb(194, 255, 137)';
        
        
  
      }
      else if (fragment123=="attendance"){
        this.navigateToFragment('attendance');
        this.infodiv='none';
        this.comdiv='none';
        this.tattan='block';
        this.colourI='rgb(194, 255, 137)';
        this.colourC='rgb(194, 255, 137)';
        this.colourA='green';
        this.colourL='rgb(194, 255, 137)';
      }
      else if (fragment123=="tcomplaint"){
        this.navigateToFragment('tcomplaint');
        this.infodiv='none';
        this.comdiv='block';
        this.tattan='none'
        this.colourI='rgb(194, 255, 137)';
        this.colourC='green';
        this.colourA='rgb(194, 255, 137)';
        this.colourL='rgb(194, 255, 137)';
      }
    });
  }


  mainnav(fragment:any){
    if(fragment=="tinfo"){
      this.navigateToFragment('tinfo');
      this.comdiv='none';
      this.infodiv='block';
      this.tattan='none';
      this.colourI='green';
      this.colourC='rgb(194, 255, 137)';
      this.colourA='rgb(194, 255, 137)';
      this.colourL='rgb(194, 255, 137)';
      
      

    }
    else if (fragment=="attendance"){
      this.navigateToFragment('attendance');
      this.infodiv='none';
      this.comdiv='none';
      this.tattan='block';
      this.colourI='rgb(194, 255, 137)';
      this.colourC='rgb(194, 255, 137)';
      this.colourA='green';
      this.colourL='rgb(194, 255, 137)';
    }
    else if (fragment=="tcomplaint"){
      this.navigateToFragment('tcomplaint');
      this.infodiv='none';
      this.comdiv='block';
      this.tattan='none'
      this.colourI='rgb(194, 255, 137)';
      this.colourC='green';
      this.colourA='rgb(194, 255, 137)';
      this.colourL='rgb(194, 255, 137)';
    }
 
 
  }

  navigateToFragment(fragment: string): void {
    this.location.replaceState('tlogin', '#' + fragment);
    //this.router.navigate(['/tlogin'], { fragment: this.fregment });
    //this.location.go(`/tlogin#${fragment}`);
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

}
