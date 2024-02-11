import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class VimeoService {
  constructor(private http: HttpClient) {}

  getShowReel() {
    return this.http.get(
      'https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/76979871'
    );
  }
}
