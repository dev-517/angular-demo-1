import { NgModule } from "@angular/core";
import { NgForm } from "@angular/forms";
import ProductService from "../services/product.service";
import UserService from "./user.service";

@NgModule({
    providers: [ProductService, UserService]
})
export default class CommonModule { }