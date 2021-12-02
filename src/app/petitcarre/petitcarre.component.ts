import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-petitcarre',
  templateUrl: './petitcarre.component.html',
  styleUrls: ['./petitcarre.component.scss']
})
export class PetitcarreComponent implements OnInit {

  @Input() color: string='';
  @Output() colorEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }



  sendColor() {
    this.colorEvent.emit((this.color))
  }
}
