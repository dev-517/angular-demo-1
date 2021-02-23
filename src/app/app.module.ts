import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import ContactComponent from "./contact/contact.component";
import FooterComponent from "./footer/footer.component";
import HeaderComponent from "./header/header.component";
import MainComponent from "./main/main.component";
import ResultComponent from "./result/result.component";

@NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        FooterComponent, 
        MainComponent, ContactComponent, ResultComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export default class AppModule { }