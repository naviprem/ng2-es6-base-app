
import ngCore from "@angular/core";
import style from "./app.sass";
import template from "./app.html";

class AppComponent {
        constructor () {}

        //This add function is here to demonstrate Unit testing capabilities of this stack
        add(a, b) { return a + b;}
    }


AppComponent.annotations = [
    new ngCore.Component({
        selector: 'my-app',
        template: template,
        styles: [style]
    })
];

export default AppComponent;
