import { Component, OnInit } from '@angular/core';
import {UserToken} from "../model/usertoken";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: UserToken;
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.userService.currentUser.subscribe(value => {
      this.currentUser = value;
    })
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
