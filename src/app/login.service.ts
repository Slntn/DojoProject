import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './../model/user';

@Injectable()
export class LoginService {
  private base = '/api/auth/';
  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(this.base + 'login', user);
  }

  register(user: User) {
    return this.http.post(this.base + 'register', user);
  }

  logout() {
    return this.http.delete(this.base + 'logout');
  }

}
