import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import ProductService from "../services/product.service";

@Injectable()
export default class ProductResolver implements Resolve<any> {

    constructor(private productSvc: ProductService) { }

    resolve() {
        return this.productSvc.get();
    }
}