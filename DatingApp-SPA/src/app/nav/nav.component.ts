import { AlertifyService } from './../services/alertify.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any ={};
  constructor( public auth:AuthService , private alertify:AlertifyService) { }
  
  // username:string
  ngOnInit() {
    // this.username = localStorage.getItem('username');
  }
  
  logIn(){
    this.auth.login(this.model).subscribe(next => {
      
      this.alertify.success('Logged in successfully');
    }, error =>{
      this.alertify.error(error);
    })
  }

  loggedIn(){
    return this.auth.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    this.alertify.message('logged Out');
  }

}
