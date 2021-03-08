// interpolation
// property binding
// class binding
// style binding
// event binding
// two way binding
import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    template: `<h1 [class.inactive]="shouldApply">Main</h1>
       <app-reactive-form></app-reactive-form>
        <app-product-list></app-product-list>
    `
})
class MainComponent {
    shouldApply: boolean = true;

}

export default MainComponent;
