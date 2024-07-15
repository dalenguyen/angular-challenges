import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterLayoutComponent } from '../filter-layout.component';
import { FilterBaseDirective } from '../filter-base';

@Component({
  selector: 'angular-challenges-filter-a',
  standalone: true,
  template: `
    <angular-challenges-filter-layout
      [title]="title()"
      [descriptions]="descriptions()"
      (filterValue)="filterValue.emit($event)"
    />
  `,
  imports: [CommonModule, FilterLayoutComponent],
})
export class FilterAComponent extends FilterBaseDirective {
  title = signal('Filter A');
  descriptions = signal(['Find something by filter A']);
}
