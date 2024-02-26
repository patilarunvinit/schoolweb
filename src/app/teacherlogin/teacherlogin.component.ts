import { Component } from '@angular/core';
import {Router} from '@angular/router' 

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
//import{del,raise} from 'src/app/tcompaint/tcompaint.component';
import{TimetableComponent } from 'src/app/timetable/timetable.component';


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
  DataToInput:any;
  DataToInputforMyatt:any;
  width:any;
  screenWidth:any;
  screenHeight:any;
  colnav:any;
  colmain:any;
  


  //DataToInput={'delB':'none','delcolour':'rgb(194, 255, 137)'};


  constructor (private router:Router,
    private location: Location,
    private Router:Router,   
    private route: ActivatedRoute,
    ){
    
    
  }


  ngOnInit() {
    this.route.fragment.subscribe((fragment123: any) => {
      //alert(fragment123)
      if(fragment123=="tinfo"){
        this.navigateToFragment('tinfo');
        this.comdiv='none';
        this.infodiv='block';
        this.tattan='none';
        this.colourI='rgb(194, 255, 137)';
        this.colourC='rgb(196, 255, 196)';
        this.colourA='rgb(196, 255, 196)';
        this.colourL='rgb(196, 255, 196)';
        
        
  
      }
      else if (fragment123=="attendance"){
        this.navigateToFragment('attendance');
        this.infodiv='none';
        this.comdiv='none';
        this.tattan='rgb(194, 255, 137)';
        this.colourI='rgb(196, 255, 196)';
        this.colourC='rgb(196, 255, 196)';
        this.colourA='rgb(194, 255, 137)';
        this.colourL='rgb(196, 255, 196)';
      }
      else if (fragment123=="tcomplaint"){
        this.navigateToFragment('tcomplaint');
        this.infodiv='none';
        this.comdiv='block';
        this.tattan='none'
        this.colourI='rgb(196, 255, 196)';
        this.colourC='rgb(194, 255, 137)';
        this.colourA='rgb(196, 255, 196)';
        this.colourL='rgb(196, 255, 196)';
      }
      else if (fragment123=="give"){
        this.infodiv='none';
        this.comdiv='none';
        this.tattan='block';
        this.colourI='rgb(194, 255, 196)';
        this.colourC='rgb(194, 255, 196)';
        this.colourA='rgb(194, 255, 137)';
        this.colourL='rgb(194, 255, 196)';
      }
      else if (fragment123=="myatt"){
        this.infodiv='none';
        this.comdiv='none';
        this.colourI='rgb(194, 255, 196)';
        this.colourC='rgb(194, 255, 196)';
        this.DataToInputforMyatt={'give':'none','myatt':'block','colourC':'rgb(194, 255, 137)','colourG':'rgb(194, 255, 196)'};
        this.colourL='rgb(194, 255, 196)';
      }
      else if (fragment123=="raise"){
        this.navigateToFragment('raise');
        this.infodiv='none';
        this.comdiv='block';
        this.tattan='none'
        this.colourI='rgb(194, 255, 196)';
        this.colourC='rgb(194, 255, 137)';
        this.colourA='rgb(194, 255, 196)';
        this.colourL='rgb(194, 255, 196)';
      }
      else if (fragment123=="del"){
        this.navigateToFragment('del');
        this.infodiv='none';
        this.tattan='none';
        this.DataToInput={'riaseN':'none','delB':'block','delcolour':'rgb(194, 255, 137)','riasecolour':'rgb(194, 255, 196)'};
        this.colourI='rgb(194, 255, 196)';
        this.colourC='rgb(194, 255, 137)';
        this.colourA='rgb(194, 255, 196)';
        this.colourL='rgb(194, 255, 196)';
      }
      
    });
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;


    this.width = (window.innerWidth) ;
    if(this.width<=600){
      this.colnav="0";
      this.colmain="10";


    }
    else{
      this.colnav="2";
      this.colmain="8";
 }
 window.addEventListener('resize', this.onResize.bind(this));

}

  onResize(event:any) {
    this.width = (window.innerWidth) ;
    if(this.width<=600){
      this.colnav="0";
      this.colmain="10";


    }
    else{
      this.colnav="2";
      this.colmain="8";


    }
  }



  mainnav(fragment:any){
    if(fragment=="tinfo"){
      this.navigateToFragment('tinfo');
      this.comdiv='none';
      this.infodiv='block';
      this.tattan='none';
      this.colourI='rgb(194, 255, 137)';
      this.colourC='rgb(194, 255, 196)';
      this.colourA='rgb(194, 255, 196)';
      this.colourL='rgb(194, 255, 196)';
      
      

    }
    else if (fragment=="attendance"){
      this.navigateToFragment('attendance');
      this.infodiv='none';
      this.comdiv='none';
      this.tattan='block';
      this.colourI='rgb(194, 255, 196)';
      this.colourC='rgb(194, 255, 196)';
      this.colourA='rgb(194, 255, 137)';
      this.colourL='rgb(194, 255, 196)';
    }
    else if (fragment=="tcomplaint"){
      this.navigateToFragment('tcomplaint');
      this.infodiv='none';
      this.comdiv='block';
      this.tattan='none'
      this.colourI='rgb(194, 255, 196)';
      this.colourC='rgb(194, 255, 137)';
      this.colourA='rgb(194, 255, 196)';
      this.colourL='rgb(194, 255, 196)';
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


  filterforback:any;
  navbar="none";
  opennav(){ 
    this.navbar='block';
    this.filterforback="blur(7px)";

  }
  closenav() { 
    this.navbar='none';
    this.filterforback="none";
    
  }

  key="data"

  logout(){
       
    sessionStorage.removeItem(this.key)
    this.Router.navigate([''])
  }

}
