import { Component } from '@angular/core';
import {Router} from '@angular/router' 


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  key="data"

  constructor (
      private Router:Router,
    )
    {}

  logout(){
       
    sessionStorage.removeItem(this.key)
    this.Router.navigate([''])
  }

}
