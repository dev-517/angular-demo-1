import { NgModule } from "@angular/core";
import { NgForm } from "@angular/forms";
import ProductGaurd from "../products/product.gaurd";
import ProductService from "../services/product.service";
import UserService from "./user.service";

@NgModule({
    providers: [ProductService, UserService, ProductGaurd]
})
export default class CommonModule { }