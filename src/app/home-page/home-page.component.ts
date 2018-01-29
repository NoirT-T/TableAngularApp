import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {element} from "protractor";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users = [];

  constructor(private usersServise: UsersService) {}

  ngOnInit() {
    this.usersServise.getUsers().subscribe(users=>{
      this.users=users;
      var preloader:Element= document.getElementsByClassName('preloader-wrapper')[0]
      preloader.remove()
    })
  }
}
