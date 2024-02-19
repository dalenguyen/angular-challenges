import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'angular-challenges-root',
  template: ` <h1>Angular Challenges</h1>
    <router-outlet />`,
})
export class AppComponent {}
