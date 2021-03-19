import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import ContactComponent from "./contact/contact.component";
import FooterComponent from "./footer/footer.component";
import HeaderComponent from "./header/header.component";
import MainComponent from "./main/main.component";
import ProductListComponent from "./products/product-list.component";
import ResultComponent from "./result/result.component";
import UserListComponent from "./users/user-list.component";
import { HttpClientModule } from "@angular/common/http";
import UserComponent from "./users/user.component";
import ProductComponent from "./products/product.component";
import TimePipe from "./common/time.pipe";
import AddProductComponent from "./products/add-product.component";
import ReactiveFormsComponent from "./products/reactive-forms.component";
import { RouterModule } from "@angular/router";
import HomeComponent from "./home/home.component";
import AboutComponent from "./about/about.component";
import NotFoundComponent from "./not-found/not-found.component";
import ProductDetailComponent from "./products/product-detail.component";
import NewReviewComponent from "./reviews/new-review.component";
import ReviewsComponent from "./reviews/reviews.component";
import LoginComponent from "./login/login.component";
import CommonModule from "./common/common.module";
import AppRouterModule from "./app-router.module";
import UserService from "./common/user.service";
import ProductGaurd from "./products/product.gaurd";
import ProductService from "./services/product.service";

const ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UserListComponent },
    { path: 'new', component: AddProductComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'products/:id', component: ProductDetailComponent, children: [
            { path: '', redirectTo: 'new', pathMatch: 'full' },
            { path: 'reviews', component: ReviewsComponent },
            { path: 'new', component: NewReviewComponent }]
    },
    // { path: '**', redirectTo: '' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent, ContactComponent,
        ResultComponent, ProductListComponent,
        UserListComponent, UserComponent, ProductComponent,
        TimePipe, AddProductComponent, ReactiveFormsComponent, HomeComponent,
        AboutComponent, NotFoundComponent, ProductDetailComponent,
        NewReviewComponent, ReviewsComponent, LoginComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule,
        ReactiveFormsModule, AppRouterModule],

    providers: [UserService, ProductService, ProductGaurd],
    bootstrap: [AppComponent]
})
export default class AppModule { }


