import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  data = [
    {
      title: 'Image 1',
      description: 'Description 1',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Image 2',
      description: 'Description 2',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Image 3',
      description: 'Description 3',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Image 4',
      description: 'Description 4',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Image 5',
      description: 'Description 5',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Image 6',
      description: 'Description 6',
      url: 'https://via.placeholder.com/150'
    }
  ];
 }
