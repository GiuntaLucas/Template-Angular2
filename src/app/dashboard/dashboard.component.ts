import { Component, OnInit } from '@angular/core';
import { SessionService } from "app/services/session.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private sessionService:SessionService) { }

  ngOnInit() {
  }

}
