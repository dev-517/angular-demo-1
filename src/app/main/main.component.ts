// interpolation
// property binding
// class binding
// style binding
// two way binding
import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    template: `<h1>Main</h1>
        <h2>{{name}}</h2>
        <span>{{age}}</span>
        <br/>

     <input [value]="name" type="text" placeholder="name" />

     Active: 
     <input type="checkbox" [checked]="active" />
    `
})
class MainComponent {

    public name: string = "John";

    public age: number = 20;
    public active = false;
}

export default MainComponent;
