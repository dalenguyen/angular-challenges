import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-challenges-agc-child',
  standalone: true,
  imports: [CommonModule],
  template: ` <h3>Child</h3> `,
})
export class AgcChildComponent {
  callMe() {
    console.log('Should be triggered from grand parent component');
  }
}
