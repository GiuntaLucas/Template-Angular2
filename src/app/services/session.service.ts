import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { User } from '../model/user';

@Injectable()
export class SessionService {
    


  private userSession:User;

  constructor(private dataService: DataService) { 
    this.get();
  }


  public set(email:string, password:string):void{
    window.localStorage.setItem('credential',JSON.stringify({ email, password }));
  }
  public get():User{
    let credential = JSON.parse(window.localStorage.getItem('credential'));
    if(credential){
      this.userSession = this.dataService.findByEmail(credential.email);
      return this.userSession;
    }
    return null;
  }
  public clear():void{
    window.localStorage.removeItem('credential');
    this.userSession = null;
  }
}
