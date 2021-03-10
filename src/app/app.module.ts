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
import ProductService from "./services/product.service";
import AddProductComponent from "./products/add-product.component";
import ReactiveFormsComponent from "./products/reactive-forms.component";
import { RouterModule } from "@angular/router";
import HomeComponent from "./home/home.component";
import AboutComponent from "./about/about.component";
import NotFoundComponent from "./not-found/not-found.component";
import ProductDetailComponent from "./products/product-detail.component";

const ROUTES = [{ path: '', component: HomeComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'users', component: UserListComponent },
{ path: 'new', component: AddProductComponent },
{ path: 'products/:id', component: ProductDetailComponent },
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
        AboutComponent, NotFoundComponent, ProductDetailComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule,
        ReactiveFormsModule, RouterModule.forRoot(ROUTES)],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export default class AppModule { }