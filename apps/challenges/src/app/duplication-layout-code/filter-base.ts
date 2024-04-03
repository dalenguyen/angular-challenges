import { Directive, EventEmitter, Output } from '@angular/core';

@Directive()
export abstract class FilterBaseDirective {
  @Output() filterValue = new EventEmitter();

  addFilter(value: string): void {
    this.filterValue.emit(value);
  }
}
