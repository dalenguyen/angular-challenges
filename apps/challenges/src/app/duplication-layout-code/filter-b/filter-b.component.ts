import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'angular-challenges-filter-b',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section>
      <div>
        <h2>Filter B</h2>
      </div>

      <div>
        <p>Find something by filter B</p>
        <input [formControl]="filterB" />
      </div>

      <button (click)="addFilterB()">Apply Filter</button>
    </section>
  `,
})
export class FilterBComponent {
  filterB = new UntypedFormControl();
  @Output() filterValue = new EventEmitter();

  addFilterB(): void {
    this.filterValue.emit(this.filterB.value);
  }
}
