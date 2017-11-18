import { Component } from '@angular/core';
import { DeezerService } from './services/deezer.service';
import { ItunesService } from './services/itunes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deezerResponse: any[];
  itunesResponse: any[];
  inputModel = '';
  searchString = '';
  constructor(private deezer: DeezerService, private itunes: ItunesService) {}

  loadData() {

    this.deezer.getData(this.inputModel)
      .subscribe((res) => {
        this.deezerResponse = res.json();
        console.log(this.deezerResponse);
      });

    this.itunes.getData(this.inputModel)
      .subscribe((res) => {
        this.itunesResponse = res.json();
        console.log(this.itunesResponse);
      });
    this.searchString = this.inputModel; 
    this.inputModel = '';
  }
}
