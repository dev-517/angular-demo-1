import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
       <h4> {{name}} </h4>
       <input type="text" [(ngModel)]="name" />
        <div>My Cool WebSite</div>
        <div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    `
})
class HeaderComponent {
    public name: string = "abcdfdd";
}

export default HeaderComponent;
