import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controlcenter',
  templateUrl: './controlcenter.component.html',
  styleUrls: ['./controlcenter.component.scss']
})
export class ControlcenterComponent implements OnInit {

  @Output() mainColorEvent = new EventEmitter<string>();
  red: string="red";
  green: string="green";
  blue: string="blue";
  yellow: string="yellow";

  constructor() { }

  ngOnInit(): void {
  }



  public sendColor(event: string) {
    this.mainColorEvent.emit(event)
  }
}
