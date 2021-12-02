import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moussaoui-theo-exo1';
  public color: string='';


  sendColor(event: string) {
    this.color=event;
  }
}
