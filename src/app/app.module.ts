import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultisheetComponent } from './multisheet/multisheet.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinglesheetComponent } from './singlesheet/singlesheet.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

//import { NgbdPaginationBasic } from '@angular/material/pagination-basic';
@NgModule({
  declarations: [
    AppComponent,
    MultisheetComponent,
    SinglesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    FormsModule,
    NgxPaginationModule
       // NgbdPaginationBasic
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
