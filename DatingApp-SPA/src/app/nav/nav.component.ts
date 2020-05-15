import { AlertifyService } from './../services/alertify.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any ={};
  constructor( public auth:AuthService , private alertify:AlertifyService , private router:Router) { }
  
  // username:string
  ngOnInit() {
    // this.username = localStorage.getItem('username');
  }
  
  logIn(){
    this.auth.login(this.model).subscribe(next => {
      
      this.alertify.success('Logged in successfully');
    }, error =>{
      this.alertify.error(error);
    },()=>{
      this.router.navigate(['/members']);
    })
  }

  loggedIn(){
    return this.auth.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    this.alertify.message('logged Out');
    this.router.navigate(['/home']);
  }

}
