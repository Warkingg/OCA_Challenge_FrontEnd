import { Component, OnInit } from '@angular/core';
import {UserToken} from "../../model/usertoken";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = "";
  userForm: FormGroup = new FormGroup({
    username: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    password: new FormControl(),
    rePassword: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl()
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const id = +paramMap.get("id");
      this.getUserById(id);
    })
  }
  ngOnInit() {
  }
  getUserById(id:number){
    this.userService.getProfile(id).subscribe(user=>{
      this.userForm = new FormGroup({
        username: new FormControl(user.username),
        firstName: new FormControl(user.firstName),
        lastName: new FormControl(user.lastName),
        password: new FormControl(user.password),
        rePassword: new FormControl(user.rePassword),
        phoneNumber: new FormControl(user.phoneNumber),
        email: new FormControl(user.email)
      })
      this.username = user.username;
    })
  }
}
