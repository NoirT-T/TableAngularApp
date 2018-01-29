import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import $ from 'jquery';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  constructor(private userServise: UsersService) {
  }

  size: number

  // noinspection TypeScriptUnresolvedVariable
  onChange() {
    // noinspection TypeScriptUnresolvedVariable
    this.size = $("#first_name2").attr("value")
  }

  ngOnInit() {
    this.size = this.userServise.size
    // noinspection TypeScriptUnresolvedVariable
    document.getElementById('#first_name2').setAttribute('value',this.size.toString())
    
  }

  onClick() {
    this.userServise.setSize(+this.size)
  }

}
