import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItunesService {


  constructor( private http: Http) { }

  getData (query) {
    return this.http.get(`https://itunes.apple.com/search?term=${query}&limit=20&entity=album`);
  }

}
