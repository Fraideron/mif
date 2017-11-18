import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DeezerService {

  constructor( private http: Http ) { }

  getData (query) {
    return this.http.get(`https://api.deezer.com/search/album?q=${query}&limit=20`);
  }
}
