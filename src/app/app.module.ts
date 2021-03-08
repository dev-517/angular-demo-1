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

@NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent, ContactComponent,
        ResultComponent, ProductListComponent,
        UserListComponent, UserComponent, ProductComponent,
        TimePipe, AddProductComponent,ReactiveFormsComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export default class AppModule { }