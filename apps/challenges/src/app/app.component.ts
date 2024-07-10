import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLinkWithHref],
  selector: 'angular-challenges-root',
  template: ` <h1>Angular Challenges</h1>
    <div>
      <aside>
        <ul>
          <li>
            <a routerLink="duplication-code-layout">Duplicate Code Layout</a>
          </li>
          <li><a routerLink="control-child-layout">Control Child Layout</a></li>
          <li>
            <a routerLink="multilevel-data-passing">Multilevel Data Passing</a>
          </li>
          <li>
            <a routerLink="access-grandchild-component"
              >Access Grandchild Component</a
            >
          </li>
          <li>
            <a routerLink="material-tabs-rendering">Material Tabs Rendering</a>
          </li>
        </ul>
      </aside>
      <main>
        <router-outlet />
      </main>
    </div>`,
})
export class AppComponent {}
