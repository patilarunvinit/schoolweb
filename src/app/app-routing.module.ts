import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {StudentloginComponent } from './studentlogin/studentlogin.component';
import {SadminComponent } from './sadmin/sadmin.component';
import {TeacherloginComponent } from './teacherlogin/teacherlogin.component';
//import {TimetableComponent } from './timetable/timetable.component';



const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'slogin', component:StudentloginComponent},
  { path: 'admin', component:SadminComponent},
  { path: 'tlogin', component:TeacherloginComponent},
  


];
const routerOptions: ExtraOptions={
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled',
  //useHash: true,
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
