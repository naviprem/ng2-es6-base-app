
import ngCore from "@angular/core";
import ngPlatformBrowser from "@angular/platform-browser";
import AppComponent from './app.component.js';
import StateListService from "./services/state-list.js";

class AppModule {
        constructor() {}
    }

AppModule.annotations = [
    new ngCore.NgModule({
        imports: [ ngPlatformBrowser.BrowserModule ],
        declarations: [ AppComponent ],
        bootstrap: [ AppComponent ],
        providers: [StateListService]
    })
];

export default AppModule;

