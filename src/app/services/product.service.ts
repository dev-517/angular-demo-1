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
        const options = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        };
        return this.http.get("https://dl-product.herokuapp.com/api/products", options);
    }

    // payload/body
    public post(product) {
        const options = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        };
        return this.http.post("https://dl-product.herokuapp.com/api/products", product, options);
    }

    public getById(id: string) {
        const options = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        };
        return this.http.get("https://dl-product.herokuapp.com/api/products/" + id, options);
    }

    set reviews(data: any[]) {
        this._reviews = data;
    }

    get reviews() {
        return this._reviews;
    }
}