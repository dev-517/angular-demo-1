import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export default class ProductService {

    // private http: HttpClient;

    // constructor(http: HttpClient) {
    //     this.http = http;
    // }

    private _reviews: any[] = [];

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get("https://dl-product.herokuapp.com/api/products");
    }

    // payload/body
    public post(product) {
        return this.http.post("https://dl-product.herokuapp.com/api/products", product);
    }

    public getById(id: string) {
        return this.http.get("https://dl-product.herokuapp.com/api/products/" + id);
    }

    set reviews(data: any[]) {
        this._reviews = data;
    }

    get reviews() {
        return this._reviews;
    }
}