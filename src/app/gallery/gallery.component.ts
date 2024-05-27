import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, ViewChild } from '@angular/core';

import { MediaItem } from '../shared/models/media.model';
import { MediaService } from '../shared/data-access/media.service';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxMasonryModule, NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, NgxMasonryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  @ViewChild(NgxMasonryComponent, { static: true }) masonry: NgxMasonryComponent | undefined;
  
  galleryItems: MediaItem[] = [];

  public myOptions: NgxMasonryOptions = {
    gutter: 5,
    columnWidth: '.gallery-item',
    itemSelector: '.gallery-item',
    fitWidth: true
  };

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.galleryItems = this.mediaService.listAllGalleryItems();
  }



}
