import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';

import { AlertifyService } from './../../services/alertify.service';
import { User } from './../../models/user';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;

  // dont leave a browser
  @HostListener('window:beforeunload' , ['$event'])
  unloadNotification($event:any){
    if (this.editForm.dirty){
      $event.returnValue = true ;
    }
  }


  constructor(
    private route: ActivatedRoute ,
    private alertify:AlertifyService ,
    private userService:UserService ,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    })
    console.log(this.auth.decodedToken.nameid);
    console.log(this.user);
    
    
  }

  updateUser(){
    this.userService.updateUser(this.auth.decodedToken.nameid , this.user).subscribe( next => {
      this.alertify.success('Profile updated succesflly!');

    this.editForm.reset(this.user);

    }, error =>{
      this.alertify.error(error);
    });
    
    
  }

}
