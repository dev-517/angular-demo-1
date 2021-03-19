import { NgModule } from "@angular/core";
import ProductService from "../services/product.service";
import UserService from "./user.service";

@NgModule({
    providers: [ProductService]
})
export default class CommonModule { }