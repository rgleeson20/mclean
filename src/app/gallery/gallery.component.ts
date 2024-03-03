import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MediaItem } from '../shared/models/media.model';
import { MediaService } from '../shared/data-access/media.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  
  galleryItems: MediaItem[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.galleryItems = this.mediaService.listAllGalleryItems();
  }

}
