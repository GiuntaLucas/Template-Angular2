import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class DataService implements OnInit {
  


  private Users: Array<User>;

  constructor() {
    this.Users = [];
    for (let i = 1; i < 101; i++) {
      let u = new User();
      u.name = 'test' + i;
      u.firstname = 'test' + i;
      u.email = 'test' + i + '@outlook.com';
      u.password = 'test';
      this.Users.push(u);
    }
  }

  ngOnInit(): void {
    
  }

  public getUsers(): Array<User> {
    return this.Users;
  }
  public findByEmail(email:string): User{
    return this.Users.find(x => x.email == email);
  }



}
