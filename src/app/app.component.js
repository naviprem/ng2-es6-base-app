
import ngCore from "@angular/core";

class AppComponent {
        constructor () {
            let array = [1,2,3,4,5];
            let odd = array.filter(n => n%2 == 1)
        }
    }


AppComponent.annotations = [
    new ngCore.Component({
        selector: 'my-app',
        template: '<h3>Base App with ng2-rc5, es6, babel, webpack</h3>'
    })
];

export default AppComponent;
