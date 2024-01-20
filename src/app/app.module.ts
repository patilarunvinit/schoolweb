import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { InfoComponent } from './info/info.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AttandanceComponent } from './attandance/attandance.component';
import { SadminComponent } from './sadmin/sadmin.component';
import{ FormsModule} from '@angular/forms';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { TinfoComponent } from './tinfo/tinfo.component';
import { TattendanceComponent } from './tattendance/tattendance.component'
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';



import { RouterModule, Routes, ExtraOptions } from '@angular/router';


import {CookieService} from 'ngx-cookie-service';
import { LogoutComponent } from './logout/logout.component';
import { TcomplaintComponent } from './tcomplaint/tcomplaint.component';
import { SnotificationComponent } from './snotification/snotification.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StudentloginComponent,
    InfoComponent,
    TimetableComponent,
    AttandanceComponent,
    SadminComponent,
    TeacherloginComponent,
    TinfoComponent,
    TattendanceComponent,
    LogoutComponent,
    TcomplaintComponent,
    SnotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule,
    YouTubePlayerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDividerModule,
    
    
    
  ],
  
  
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
