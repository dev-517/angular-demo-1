import { Component } from "@angular/core";
import * as moment from "moment";

// pipe: transform data

@Component({
    selector: 'app-product-list',
    template: `<h3>Products</h3>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>InStock</th>
                    <th>Updated At</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let product of products">
                    <td>{{product.brand | uppercase}}</td>
                    <td>{{product.model | lowercase}}</td>
                    <td>{{product.price | currency}}</td>
                    <td>
                        <input  disabled type="checkbox" [checked]="product.inStock"/>
                    </td>
                    <td>{{ getRelativeTime(product.updatedDate)}}</td>
                    <td>
                        <img class="rounded-circle" [src]="product.img" width="130" height="120" />
                    </td>
                </tr>
            </tbody>
        </table>
    `
})
export default class ProductListComponent {

    products = [{
        id: 1,
        brand: "Apple",
        model: "Iphone X",
        price: 800,
        inStock: true,
        updatedDate: Date.now(),
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BGe9ZUBpVXujhEXersSHpAHaIe%26pid%3DApi%26h%3D160&f=1"
    }, {
        id: 2,
        brand: "Samsung",
        model: "Galaxy S20",
        price: 900,
        inStock: false,
        updatedDate:Date.parse("02/22/2021"),
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8TsXtQmR08UNiq4okVXAvwHaEo%26pid%3DApi&f=1"
    }];


    public getRelativeTime(dt): string {
        return moment(dt).fromNow();
    }
}