import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBaseDirective } from './filter-base';

@Component({
  selector: 'angular-challenges-filter-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <div>
        <h2>{{ title() }}</h2>
      </div>

      <div>
        @for (description of descriptions(); track $index) {
        <p>{{ description }}</p>
        }
      </div>

      <!-- Content holder -->
      <ng-container [ngTemplateOutlet]="currentTemplate"></ng-container>
    </section>

    <ng-template #defaultForm>
      <div>
        <input #filterInput />
      </div>

      <button (click)="filterValue.emit(filterInput.value)">
        Apply Filter
      </button>
    </ng-template>
  `,
})
export class FilterLayoutComponent
  extends FilterBaseDirective
  implements OnInit
{
  title = input.required<string>();
  descriptions = input<string[]>();

  @ViewChild('defaultForm', { static: true })
  defaultForm!: TemplateRef<unknown>;

  currentTemplate!: TemplateRef<unknown>;

  @Input({ required: false }) customForm!: TemplateRef<unknown>;

  ngOnInit(): void {
    if (this.customForm) {
      this.currentTemplate = this.customForm;
    } else {
      this.currentTemplate = this.defaultForm;
    }
  }
}
