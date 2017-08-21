import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgGridModule} from "ag-grid-angular/main";
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {ViewportDataService} from './my-grid-application/viewport-data.service';
@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent
        
    ],
    imports: [
        BrowserModule,
        AgGridModule.withComponents(
            []
        )
    ],
    providers: [ViewportDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
