import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgcChildComponent } from '../agc-child/agc-child.component';

@Component({
  selector: 'angular-challenges-agc-parent',
  standalone: true,
  template: `
    <h3>Parent</h3>
    <angular-challenges-agc-child />
  `,

  imports: [CommonModule, AgcChildComponent],
})
export class AgcParentComponent {}
