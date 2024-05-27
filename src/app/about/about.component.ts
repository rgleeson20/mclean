import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineEntryComponent } from '../shared/components/timeline-entry/timeline-entry.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    TimelineEntryComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent { }
