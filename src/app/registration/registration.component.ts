import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Message } from '../model/message';
import { User } from '../model/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user:User;
  private confirme: string;
  private message:Message;
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {
    this.user = new User();
    this.message = new Message();
  }

  public register(){
    let user = new User();

    for (var key in this.user) {
      if (this.user.hasOwnProperty(key)) {
        user[key] = this.user[key];
        
      }
    }
    this.dataService.getUsers().push(user);
    this.router.navigate(['login'])
  }

}
