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
  user = new User;
  constructor(private _dataService: LoginService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
  }

  onSubmit() {

    this.flag = true;
  }
}
