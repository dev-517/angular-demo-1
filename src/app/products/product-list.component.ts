import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import ProductService from "../services/product.service";

// pipe: transform data
@Component({
    selector: 'app-product-list',
    template: `
            <button class="btn btn-info" routerLink="/new">Add New Product</button>
            <div *ngIf="error" class="offset-md-1 col-md-6 alert alert-danger">
                Failed to load data
            </div>
            <div *ngIf="loading" class="loader">
                <img src="../assets/loading.gif"/>
                Loading...
            </div>
            <div class="offset-md-1">
                <h3>Products</h3>
                <div *ngIf="products.length===0" class="alert alert-info">No Records Found</div>
                <div *ngFor="let product of products">
                    <app-product [routerLink]="'/products/'+product._id" [product]="product"></app-product>
                </div>
            </div> 
    `
})
export default class ProductListComponent {

    products: any = [];
    loading: boolean = false;
    error: boolean = false;

    // constructor injection
    constructor(svc: ProductService, activatedRoute: ActivatedRoute) {
        this.products = activatedRoute.snapshot.data[0].data;
        // this.loading = true;
        // // hard to unit test
        // // const svc = new ProductService(http);
        // svc.get().subscribe((res: any) => {
        //     this.products = res.data;
        //     this.loading = false;
        // }, e => {
        //     this.error = true;
        //     this.loading = false;
        // });
    }
}
