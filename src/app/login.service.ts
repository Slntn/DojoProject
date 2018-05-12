import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { User } from './../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  login(user: User) {
    return this.http.post('/login', user);
  }

  register(user: User): Observable<User> {
    return this.http.post('/register', user)
    .pipe(
      map(response => response.json())
    );
  }

  logout() {
    return this.http.delete('/logout');
  }

}
