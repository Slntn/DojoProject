import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: string[] = [];
  flag = false;
  user: User = new User;
  constructor(private _dataService: LoginService) { }

  ngOnInit() {
  }

  onSubmitLogin(user: User) {
  }

  onSubmit(user: User) {
    console.log(user);
    this._dataService.register(user).subscribe(error => {
      console.log('error registering user', error);
    });
   this.flag = true;
  }
}
