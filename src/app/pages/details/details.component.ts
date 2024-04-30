import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  id = 0;

  constructor(private activated: ActivatedRoute) {
    activated.params.subscribe(p => {
      this.id = p['id'];
    })
  }
}
