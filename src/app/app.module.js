
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component.js';
import { StateListService } from "./services/state-list.service.js";

export class AppModule {
        constructor() {}
    }

AppModule.annotations = [
    new NgModule({
        imports: [ BrowserModule ],
        declarations: [ AppComponent ],
        bootstrap: [ AppComponent ],
        providers: [ StateListService ]
    })
];


