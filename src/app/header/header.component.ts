import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
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
class HeaderComponent { }

export default HeaderComponent;
