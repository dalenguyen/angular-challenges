// http://localhost:4200/control-child-layout

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildLayoutComponent } from "./child-layout/child-layout.component";

@Component({
    selector: 'angular-challenges-control-child-layout',
    standalone: true,
    template: `
  <h2>Control Child Layout</h2>
    <fieldset>
      <legend>Problem</legend>
      <p>
        We currently have a shared component, but we need to apply different styles to it. We are seeking a solution that allows us to achieve the desired flexibility in terms of styling. For example:
      </p>
      <ul>
        <li>Different color in the child layout</li>
        <li>Padding for some elements may also be different</li>
      </ul>
    </fieldset>

    <angular-challenges-child-layout />
    <angular-challenges-child-layout />
  `,
    imports: [CommonModule, ChildLayoutComponent]
})
export default class ControlChildLayoutComponent {}
