import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'angular-challenges-filter-a',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section>
      <div>
        <h2>Filter A</h2>
      </div>

      <div>
        <p>Find something by filter A</p>
        <input [formControl]="filterA" />
      </div>

      <button (click)="addFilterA()">Apply Filter</button>
    </section>
  `,
})
export class FilterAComponent {
  filterA = new UntypedFormControl();
  @Output() filterValue = new EventEmitter();

  addFilterA(): void {
    this.filterValue.emit(this.filterA.value);
  }
}
