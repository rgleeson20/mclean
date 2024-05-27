import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';

@Component({
  selector: 'app-timeline-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-entry.component.html',
  styleUrl: './timeline-entry.component.scss',
})
export class TimelineEntryComponent {
  @Input({ required: true }) headerText!: string;
  @Input({ required: true }) datePeriodText!: string;
  @Input() subheader?: string;
  @Input() description?: string;
  @Input() dateWidth: number = 100; 
}
