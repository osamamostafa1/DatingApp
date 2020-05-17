import { User } from './../models/user';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;
constructor( private http:HttpClient) { }

// get users
getUsers(): Observable<User[]>{
 return this.http.get<User[]>(this.baseUrl+'users' );
}

//get user by Id
getUser(id:number): Observable<User>{
  return this.http.get<User>(this.baseUrl+'users/'+id);
 }

}

