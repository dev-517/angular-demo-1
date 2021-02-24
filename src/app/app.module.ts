import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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

@NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent, ContactComponent,
        ResultComponent, ProductListComponent, UserListComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export default class AppModule { }