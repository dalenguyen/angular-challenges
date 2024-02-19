// http://localhost:4200/duplication-code-layout

import { Component } from '@angular/core';
import { FilterAComponent } from './filter-a/filter-a.component';
import { FilterBComponent } from './filter-b/filter-b.component';

@Component({
  selector: 'angular-challenges-duplication-layout-code',
  standalone: true,
  template: `
    <h2>Duplication Layout Code</h2>
    <fieldset>
      <legend>Problem</legend>
      <p>
        We have a few components which share the same layout and logic. Find a
        solution that helps to improve reusability and maintainability of the
        code.
      </p>
    </fieldset>

    <angular-challenges-filter-a (filterValue)="runFilter($event)" />
    <angular-challenges-filter-b (filterValue)="runFilter($event)" />
  `,
  imports: [FilterAComponent, FilterBComponent],
})
export default class DuplicationLayoutCodeComponent {
  runFilter(value: string) {
    alert(value);
  }
}
