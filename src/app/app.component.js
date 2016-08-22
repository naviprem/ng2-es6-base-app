
import ngCore from "@angular/core";

class AppComponent {
        constructor () {}

        //This add function is here to demonstrate Unit testing capabilities of this stack
        add(a, b) { return a + b;}
    }


AppComponent.annotations = [
    new ngCore.Component({
        selector: 'my-app',
        template: '<h3 class="app-header">Base App with ng2-rc5, es6, babel, webpack, sass, karma, jasmine, phantomjs</h3>',
        styles: [require('./app.sass')]
    })
];

export default AppComponent;
