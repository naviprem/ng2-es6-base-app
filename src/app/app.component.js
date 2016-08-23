
import { Component} from "@angular/core";
import style from "./app.scss";
import template from "./app.html";
import { StateListComponent } from "./state-list/state-list.component.js";

export class AppComponent {
        constructor () {}

        //This add function is here to demonstrate Unit testing capabilities of this stack
        add(a, b) { return a + b;}
    }

AppComponent.annotations = [
    new Component({
        selector: 'my-app',
        declarations: [ StateListComponent ],
        template: template,
        styles: [ style ]
    })
];


