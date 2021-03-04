import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export default class ProductService {

    // private http: HttpClient;

    // constructor(http: HttpClient) {
    //     this.http = http;
    // }

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get("https://dl-product.herokuapp.com/api/products");
    }

    // payload/body
    public post(product) {
        return this.http.post("https://dl-product.herokuapp.com/api/products", product);
    }
}