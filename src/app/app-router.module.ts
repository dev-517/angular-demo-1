import { NgModule } from "@angular/core";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import AboutComponent from "./about/about.component";
import ContactComponent from "./contact/contact.component";
import HomeComponent from "./home/home.component";
import LoginComponent from "./login/login.component";
import NotFoundComponent from "./not-found/not-found.component";
import AddProductComponent from "./products/add-product.component";
import ProductDetailComponent from "./products/product-detail.component";
import ProductListComponent from "./products/product-list.component";
import ProductGaurd from "./products/product.gaurd";
import NewReviewComponent from "./reviews/new-review.component";
import ReviewsComponent from "./reviews/reviews.component";
import UserListComponent from "./users/user-list.component";

const ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'products', component: ProductListComponent,
        canActivate: [ProductGaurd]
    },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UserListComponent },
    { path: 'new', canActivate: [ProductGaurd], component: AddProductComponent, pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    {
        path: 'products/:id', canActivate: [ProductGaurd],
        canActivateChild: [ProductGaurd], component: ProductDetailComponent, children: [
            { path: '', redirectTo: 'new', pathMatch: 'full' },
            { path: 'reviews', component: ReviewsComponent },
            { path: 'new', component: NewReviewComponent }]
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
