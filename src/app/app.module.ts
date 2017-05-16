import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AgGridModule} from "ag-grid-angular/main";

import { AppComponent } from './app.component';
import { GridApplicationComponent } from './grid-application/grid-application.component';
import { RedComponentComponent } from './red-component/red-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GridApplicationComponent,
    RedComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents(
        [RedComponentComponent]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
