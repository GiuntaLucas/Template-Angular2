import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { Message } from '../model/message';

@Component({
  selector: 'my-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations:[]
})
export class AlertComponent implements OnInit, OnChanges {
    


  @Input()
  private message:Message;

  private isSet:string;

  constructor() { }

  ngOnInit() {
    this.isSet = 'hidden';
  }

  ngOnChanges(): void {
      this.isSet = 'show';
    }
}
