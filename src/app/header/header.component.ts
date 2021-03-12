import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">My Products App</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link" routerLinkActive="active" routerLink="/home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLinkActive="active" routerLink="/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLinkActive="active" routerLink="/products">Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLinkActive="active" routerLink="/users">Users</a>
             </li>
            <li class="nav-item">
                <a class="nav-link" routerLinkActive="active" routerLink="/contact">Contact</a>
            </li>
            </ul>
        </div>
    </nav>
    `
})
export default class HeaderComponent {

}