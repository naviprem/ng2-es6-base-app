
import { Component } from "@angular/core";
import style from "./app.sass";
import template from "./app.html";
import { StateListService } from "./services/state-list.js";

export class AppComponent {
        constructor (stateListService) {
            this.stateListService = stateListService;
        }

        static get parameters() {
            return [[StateListService]];
        }

        ngOnInit() {
            this.getItems();
        }

        getItems() {
            var that = this;
            this.stateListService.getStatesSlowly()
                .then((states) => { that.items = states; console.log(that.items);})
                .catch((err) => { console.error("error", err); });
        }

        //This add function is here to demonstrate Unit testing capabilities of this stack
        add(a, b) { return a + b;}
    }

AppComponent.annotations = [
    new Component({
        selector: 'my-app',
        template: template,
        styles: [ style ],
        providers: [ StateListService ]
    })
];


