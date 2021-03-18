import { NgModule } from "@angular/core";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import AboutComponent from "./about/about.component";
import ContactComponent from "./contact/contact.component";
import HomeComponent from "./home/home.component";
import LoginComponent from "./login/login.component";
import NotFoundComponent from "./not-found/not-found.component";
import ProductListComponent from "./products/product-list.component";
import ReviewsComponent from "./reviews/reviews.component";
import UserListComponent from "./users/user-list.component";

const ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UserListComponent },
    { path: 'new', component: ProductListComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'products/:id', component: ProductListComponent, children: [
            { path: '', redirectTo: 'new', pathMatch: 'full' },
            { path: 'reviews', component: ReviewsComponent },
            { path: 'new', component: ReviewsComponent }]
    },
    // { path: '**', redirectTo: '' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export default class AppRouterModule {

}