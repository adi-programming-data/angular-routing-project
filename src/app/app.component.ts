import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routing-project';

  constructor(private location:Location) {

  }

  goForward() {
    this.location.forward()
  }
  goBack() {
    this.location.back()
  }
}
