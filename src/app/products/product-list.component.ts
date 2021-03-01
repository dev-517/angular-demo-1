import { Component } from "@angular/core";
import ProductService from "../services/product.service";

// pipe: transform data
@Component({
    selector: 'app-product-list',
    template: `
            <div *ngIf="loading" class="loader">
                <img src="../assets/loading.gif"/>
                Loading...
            </div>
            <div class="offset-md-1">
                <h3>Products</h3>
                <div *ngFor="let product of products">
                    <app-product [product]="product"></app-product>
                </div>
            </div> 
    `
})
export default class ProductListComponent {

    products: any = [];
    loading: boolean = false;

    // constructor injection
    constructor(svc: ProductService) {
        this.loading = true;
        // hard to unit test
        // const svc = new ProductService(http);
        svc.get().subscribe((res: any) => {
            console.log(res);
            this.products = res.data;
            this.loading = false;
        });
    }
}
