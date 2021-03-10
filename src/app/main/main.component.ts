// interpolation
// property binding
// class binding
// style binding
// event binding
// two way binding
import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    template: `
        <app-header></app-header>
        <div class="container" style="margin-top:50px">
            <router-outlet></router-outlet>
        </div>
    `
})
class MainComponent {
    shouldApply: boolean = true;

}

export default MainComponent;
