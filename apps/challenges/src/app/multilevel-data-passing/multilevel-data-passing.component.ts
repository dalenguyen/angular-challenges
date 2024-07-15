import { Component } from '@angular/core';
import { MldpChildrenComponent } from './mldp-children/mldp-children.component';

@Component({
  selector: 'angular-challenges-multilevel-data-passing',
  standalone: true,
  template: `
    <h2>Multilevel Data Passing</h2>
    <fieldset>
      <legend>Problem</legend>
      <p>
        In Angular applications, components often need to communicate with each
        other by passing data. While parent-child communication is
        straightforward using <strong>&#64;Input</strong> and
        <strong> &#64;Output </strong> decorators, things become more complex
        when we have a multilevel component hierarchy. Consider the following
        scenario:
      </p>
      <ol>
        <li>Grandparent Component (A): Contains a variable x.</li>
        <li>Parent Component (B): Receives x from the grandparent and needs to
          pass it to its child component.
        </li>
        <li>Child Component (C): Expects to receive x from the parent.</li>
      </ol>

      Design an efficient and maintainable approach to achieve multilevel data
      passing from the grandparent component (A) to the child component (C) in
      an Angular application. Ensure that the solution adheres to best practices
      and doesn’t lead to tight coupling between components.
    </fieldset>

    <h2>ROOT</h2>
    <angular-challenges-mldp-children [data]="'ROOT'" />
  `,
  imports: [MldpChildrenComponent],
})
export default class MultilevelDataPassingComponent { }
