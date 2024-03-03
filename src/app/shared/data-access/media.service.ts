import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStore } from './data.store';
import { MediaItem } from '../models/media.model';



@Injectable({
  providedIn: 'root',
})
export class MediaService {

  constructor() {}

  listAllGalleryItems(): MediaItem[] {
    return DataStore.allMedia.filter((media) => media.includeInGallery);
  }
  
}
