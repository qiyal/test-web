import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../my-objects/user";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
  api = 'http://localhost:3000/users';
  user: User = new User(-1, '', '', '', '');

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User[]> {
    return this.http.get<User[]>(this.api + `?email=${user.email}&password=${user.password}`);
  }

  setUser(user: User): void {
    this.user = user;
  }
}
