import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {DataTableModule} from './data-table/data-table.module';
import { DeezerService } from './services/deezer.service';
import {ItunesService} from './services/itunes.service';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule,
    FormsModule,
    Angular2FontawesomeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DeezerService,
    ItunesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
