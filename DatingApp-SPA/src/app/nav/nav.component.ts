import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any ={};
  constructor( private auth:AuthService) { }

  ngOnInit() {
  }

  logIn(){
    this.auth.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error =>{
      console.log('Failed to login');
    })
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    // if get token will return true else return false 
    return !!token
  }

  logOut(){
    localStorage.removeItem('token');
    console.log('logged Out');
  }

}
