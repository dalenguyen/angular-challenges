import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgcParentComponent } from './agc-parent/agc-parent.component';

@Component({
  selector: 'angular-challenges-access-grandchild-component',
  standalone: true,
  template: `
    <h2>Access Grandchild Component</h2>
    <fieldset>
      <legend>Problem</legend>
      <p>
        Design a solution that allows the
        <strong>grandparent component</strong> to directly communicate with the
        <strong>grandchild component</strong> and trigger a specific function
        within it. The communication should be efficient and follow Angular best
        practices. Feel free to adapt this statement as needed.
      </p>

      <p>Good luck with your challenge! 🚀🌟</p>
    </fieldset>

    <h2>ROOT</h2>

    <angular-challenges-agc-parent />
  `,
  imports: [CommonModule, AgcParentComponent],
})
export default class AccessGrandchildComponentComponent {}
