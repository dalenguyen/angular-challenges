import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-challenges-child-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="shared-style">
      <h2>Child title</h2>
      <p>This is a shared component.</p>
    </div>
  `,
  styles: `
    :host{
      display: block;
      border: 1px solid blue;
      margin: 1rem;
      padding: 1rem;
    }
    .shared-style { color: blue; }
  `
})
export class ChildLayoutComponent {}
