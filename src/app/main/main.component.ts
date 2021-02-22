// interpolation
// property binding
// class binding
// style binding
// event binding
// two way binding
import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    template: `<h1>Main</h1>
            <h3>{{name}}</h3>

            <input [ngClass]="name.length > 4 ? 'active':'inactive'" type="text" [value]="name" />
            <input type="checkbox" [checked] ="active"/>
            <input type="range" min="1" max="100" [value]="age"/>

            <button (click)="onClick(100)">Save</button>
            <input [value]="active" type="checkbox" (change)="onChecked(active)"/>

            <input type="text" value="akdfjkd" (keydown)="textChange()"/>

            <app-contactus></app-contactus>

    `
})
class MainComponent {

    // state
    public name: string = "Joh";
    public active: boolean = true;
    public age = 85;
    public cls = "active";

    // behavior

    public onClick(data): void {
        console.log("Button clicked", data);
    }

    public onChecked(value): void {
        console.log(value, "active value");
    }

    public textChange(): void {
        console.log("text box text changed");
    }

}

export default MainComponent;
