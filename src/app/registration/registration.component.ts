import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = {};
  constructor(private userService : UserService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  signup(form: NgForm) {
    let user = form.value;
    this.userService.register(user).subscribe(abc=>{
      this.router.navigate(['/login']);
    },error => {
      console.log("thất bại")
    })
  }
}
