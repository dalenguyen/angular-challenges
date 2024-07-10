import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-challenges-tab-1',
  standalone: true,
  imports: [CommonModule],
  template: `<p>tab-1 works!</p>`,
  styles: ``,
})
export class Tab1Component {
  constructor() {
    console.log('TAB 1');
  }
}
