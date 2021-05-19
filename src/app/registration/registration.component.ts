import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = {};
  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  signup(form: NgForm) {
    let user = form.value;
    this.userService.signup(user).subscribe(abc=>{
      console.log("123")
    },error => {
      console.log("thất bại")
    })
  }
}
