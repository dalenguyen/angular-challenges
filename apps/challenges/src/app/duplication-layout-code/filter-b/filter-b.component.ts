import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterLayoutComponent } from '../filter-layout.component';
import { FilterBaseDirective } from '../filter-base';

@Component({
  selector: 'angular-challenges-filter-b',
  standalone: true,
  template: `
    <angular-challenges-filter-layout
      [title]="title()"
      [descriptions]="descriptions()"
      [customForm]="customForm"
    />

    <ng-template #customForm>
      <div>
        <textarea #filterInput></textarea>
      </div>

      <button (click)="addFilter(filterInput.value)">Run Filter</button>
    </ng-template>
  `,
  imports: [CommonModule, FilterLayoutComponent],
})
export class FilterBComponent extends FilterBaseDirective {
  title = signal('Filter B');
  descriptions = signal(['Find something by filter B']);
}
