import { catchError } from 'rxjs/operators';
import { UserService } from './../services/user.service';
import { Observable , of } from 'rxjs';
import { AlertifyService } from './../services/alertify.service';
import { User } from './../models/user';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MemberDetailResolver implements Resolve<User>{
    
    constructor(private userService:UserService , private router:Router , private alertify:AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User>{

        return this.userService.getUser(route.params['id']).pipe(

            catchError(error => {
                this.alertify.error('Problrm retriving data');
                this.router.navigate(['/members']);
                return of(null);
            })

        );
    }
}
