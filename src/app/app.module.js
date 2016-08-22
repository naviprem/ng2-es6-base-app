
import ngCore from "@angular/core";
import ngPlatformBrowser from "@angular/platform-browser";
import AppComponent from './app.component.js';

class AppModule {
        constructor() {}
    }

AppModule.annotations = [
    new ngCore.NgModule({
        imports: [ ngPlatformBrowser.BrowserModule ],
        declarations: [ AppComponent ],
        bootstrap: [ AppComponent ]
    })
];

export default AppModule;

