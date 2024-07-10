import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

function fibonacci(num: number): number {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

@Component({
  selector: 'angular-challenges-tab-2',
  standalone: true,
  imports: [CommonModule],
  template: `<p>tab-2 works!</p>`,
  styles: ``,
})
export class Tab2Component implements OnInit {
  constructor() {
    console.log('TAB 2');
  }

  ngOnInit(): void {
    this.heavyCalculation();
  }

  heavyCalculation() {
    console.log('Fibonacci(10): ' + fibonacci(10));
  }
}
