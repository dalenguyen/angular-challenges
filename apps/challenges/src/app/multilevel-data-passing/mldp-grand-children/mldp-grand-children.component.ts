import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'angular-challenges-mldp-grand-children',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4>Grand Child</h4>
    <p>Data from parent: {{ data() }}</p>
  `,
})
export class MldpGrandChildrenComponent {
  data = input.required<string>();
}
