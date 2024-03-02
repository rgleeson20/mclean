import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LightgalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  data = [
    {
      title: 'Image 1',
      description: 'Description 1',
      url: 'https://via.placeholder.com/150',
    },
    {
      title: 'Image 2',
      description: 'Description 2',
      url: 'https://via.placeholder.com/150',
    },
    {
      title: 'Image 3',
      description: 'Description 3',
      url: 'https://via.placeholder.com/150',
    },
    {
      title: 'Image 4',
      description: 'Description 4',
      url: 'https://via.placeholder.com/150',
    },
    {
      title: 'Image 5',
      description: 'Description 5',
      url: 'https://via.placeholder.com/150',
    },
    {
      title: 'Image 6',
      description: 'Description 6',
      url: 'https://via.placeholder.com/150',
    },
  ];

  settings = {
    zoomFromOrigin: true,
    thumbnail: false,
    plugins: [lgZoom, lgThumbnail],
  };
  
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
