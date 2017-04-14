import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { DataService } from '../services/data.service';
import { SessionService } from '../services/session.service';
import { User } from '../model/user';
import { Message } from '../model/message';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email:string; 
  private password:string;

  private message:Message;

  constructor(private dataService:DataService, private sessionService:SessionService, private router:Router) 
  {
    this.message = new Message();
  }

  ngOnInit() {

  }

  public login(){
    let user = this.dataService.findByEmail(this.email);
    if(user == null || user.password != this.password){
      this.setMessage('error');      
    }else{
      this.sessionService.set(this.email, this.password);
      console.log(this.sessionService.get());
      this.router.navigate(['dashboard'])
    }
  }
  private setMessage(type:string){
    if(type == "error"){
      this.message.text = "this password and email not match !";
      this.message.type = type;
    }else{
      this.message.text = "you are logged !";
      this.message.type = type;
    }
    
  }
}
