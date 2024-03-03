import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  type OnInit,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Project } from '../shared/models/project.model';
import { ProjectService } from '../shared/data-access/project.service';
import { MatDivider } from '@angular/material/divider';
import { MediaService } from '../shared/data-access/media.service';
import { Image, MediaItem, MediaType, Video } from '../shared/models/media.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, MatDivider],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit, OnDestroy {
  project: Project | undefined = undefined;

  mediaItems: MediaItem[] = [];

  images: Image[] = [];
  videos: Video[] = [];

  private projectSub: Subscription = Subscription.EMPTY;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    const projectId$ = this.activatedRoute.params.pipe(
      map((params: Params) => params['projectId'])
    );

    this.projectSub = projectId$.subscribe((projectId) => {
      this.setProject(projectId);
    });
  }

  ngOnDestroy(): void {
    if (this.projectSub) {
      this.projectSub.unsubscribe();
    }
  }

  private setProject(projectId: string): void {
    this.project = this.projectService.getProject(projectId);

    if (this.project) {
      this.mediaItems = this.mediaService.listMediaItemsForProject(this.project.id);

      this.separateMediaItemsByType(this.mediaItems);
    }
  }

  private separateMediaItemsByType(mediaItems: MediaItem[]): void {
    this.images = mediaItems.filter((mediaItem) => mediaItem.type === MediaType.Image) as Image[];
    this.videos = mediaItems.filter((mediaItem) => mediaItem.type === MediaType.Vimeo) as Video[];
  }
}
