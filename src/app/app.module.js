
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component.js';
import { StateListComponent } from "./state-list/state-list.component.js";

export class AppModule {
        constructor() {}
    }

AppModule.annotations = [
    new NgModule({
        imports: [ BrowserModule ],
        declarations: [ AppComponent, StateListComponent ],
        bootstrap: [ AppComponent ]
    })
];


