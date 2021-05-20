import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    checkLogin = false;
  error = '';
  loading = false;
  constructor(private userService : UserService,
              private router: Router
  ) {

  }

  ngOnInit() {
  }

  login(){
   this.userService.login(this.loginForm.value)
  .pipe(first())
  .subscribe(data => {
      this.router.navigateByUrl('/home');
    },
    error => {
      this.error = 'Sai tên đăng nhập hoặc mật khẩu';
      this.loading = false;
    });
   this.checkLogin != this.checkLogin;
  }
}
