import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import {MomentModule} from 'angular2-moment';

@NgModule({
  imports: [
    CommonModule,
    MomentModule
  ],
  declarations: [TableComponent, TableRowComponent],
  exports:  [TableComponent, TableRowComponent, MomentModule]
})
export class DataTableModule { }
