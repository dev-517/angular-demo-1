import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import FooterComponent from "./footer/footer.component";
import HeaderComponent from "./header/header.component";
import MainComponent from "./main/main.component";

@NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        FooterComponent, MainComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export default class AppModule { }