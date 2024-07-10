import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Tab1Component } from './tab-1/tab-1.component';
import { Tab2Component } from './tab-2/tab-2.component';

@Component({
  selector: 'angular-challenges-material-tabs-rendering',
  standalone: true,
  imports: [CommonModule, MatTabsModule, Tab1Component, Tab2Component],
  template: `
    <h2>Material Tabs Rendering</h2>
    <fieldset>
      <legend>Problem</legend>
      <p>
        We used material tab group to show different UIs for each tab. It worked
        great!
      </p>

      <p>
        However, when app grows, each tab will have a lot of child components
        with their own calculation / request / fetching... which affects the
        performance of the application. You can check it by open the app and
        check the console log. Even though, we only see the Tab 1 content, the
        <strong
          >Tab 2 component is actually rendered behind the scene (constructor,
          Input, OnInit...)</strong
        >
        due to the default eager loading feature.
      </p>

      <p>Find a way to improve the performance of the Tab.</p>
    </fieldset>

    <mat-tab-group animationDuration="100ms" style="margin-top: 24px;">
      <mat-tab label="First">
        <angular-challenges-tab-1 />
      </mat-tab>
      <mat-tab label="Second">
        <angular-challenges-tab-2 />
      </mat-tab>
    </mat-tab-group>
  `,
  styles: ``,
})
export default class MaterialTabsRenderingComponent {}
