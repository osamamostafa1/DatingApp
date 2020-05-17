import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users:User[];

  constructor( private alertify:AlertifyService , private router:ActivatedRoute) { }

  ngOnInit() {

    this.router.data.subscribe(data => {
      this.users = data['users'];
    });

  }

}
