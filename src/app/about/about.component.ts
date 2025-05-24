import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineEntryComponent } from '../shared/components/timeline-entry/timeline-entry.component';
import { SkillsComponent } from '../shared/components/skills/skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    TimelineEntryComponent,
    SkillsComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent { }
