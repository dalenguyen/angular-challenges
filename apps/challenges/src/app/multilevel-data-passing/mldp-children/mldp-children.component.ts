import { Component, input } from '@angular/core';
import { MldpGrandChildrenComponent } from '../mldp-grand-children/mldp-grand-children.component';

@Component({
  selector: 'angular-challenges-mldp-children',
  standalone: true,
  template: `
    <h3>Children</h3>
    <angular-challenges-mldp-grand-children [data]="data()" />
  `,
  imports: [MldpGrandChildrenComponent],
})
export class MldpChildrenComponent {
  data = input.required<string>();
}
