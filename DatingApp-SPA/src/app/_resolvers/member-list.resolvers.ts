import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Observable , of } from 'rxjs';
import { AlertifyService } from '../services/alertify.service';
import { User } from '../models/user';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
// import Resolve <User[]>
export class MemberListResolver implements Resolve<User[]>{

    constructor(private userService:UserService , private router:Router , private alertify:AlertifyService){}
    // resolve
    resolve(route: ActivatedRouteSnapshot): Observable<User[]>{
        // getUsers - pipe for Error
        return this.userService.getUsers().pipe(
            catchError(error => {
                this.alertify.error('Problrm retriving data');
                // if Error go back to home page 
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}