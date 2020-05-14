import { AuthService } from './../services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
   model:any = {};
  constructor( private auth:AuthService , private alertify:AlertifyService) { }

  ngOnInit() {
  }
  
  register(){
    this.auth.register(this.model).subscribe(() =>{
      this.alertify.success('registeration successful');
    }, error => {
      this.alertify.error(error);
    })
    
    
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.alertify.message('cancelled');
    
  }
}
