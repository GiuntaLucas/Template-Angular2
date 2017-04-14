import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { User } from "app/model/user";
import { Router } from "@angular/router";
import { TranslateService } from "app/translate/translate.service";

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private languages: Array<object>;

  constructor(private sessionService: SessionService, private router: Router, private translate: TranslateService) { }

  ngOnInit() {
    this.languages = [];
    this.languages.push({ display: 'French', value: 'fr' }, { display: 'English', value: 'en' });

    this.selectLang('en');
  }

  public selectLang(key: string) {
    this.translate.use(key);
  }

  public isCurrentLang(lang: string) {
    return lang === this.translate.currentLang;
  }

  public logout(): void {
    this.sessionService.clear();
    this.router.navigate(['login']);
  }
}
