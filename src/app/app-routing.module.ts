import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {StudentloginComponent } from './studentlogin/studentlogin.component';
import {SadminComponent } from './sadmin/sadmin.component';
import {TeacherloginComponent } from './teacherlogin/teacherlogin.component';



const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'slogin', component:StudentloginComponent},
  { path: 'admin', component:SadminComponent},
  { path: 'tlogin', component:TeacherloginComponent},
  


];
const routerOptions: ExtraOptions={
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
