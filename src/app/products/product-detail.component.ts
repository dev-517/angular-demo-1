import { Component, DoCheck } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import ProductService from "../services/product.service";

@Component({
    template: `
    <div class="col-md-5">
        <div class="card">
            <img [src]="product.image" class="card-img-top"/>
            <div class="card-body">
                <h3>{{product.brand}} {{product.model}}</h3>
                <h5>{{product.price | currency}}</h5>
                <h6 *ngIf="product.avgRating">{{product.avgRating}} 
                    <i class="fa fa-star text-success"></i>
                </h6>
                <button class="btn btn-danger">
                    Buy Now
                    <i class="fa fa-shopping-cart"></i>
                </button>
            </div>
            <div class="card-footer">
                <div>{{product.lastUpdated | time }}</div>
            </div>
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" routerLinkActive="active" routerLink="reviews">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLinkActive="active" routerLink="new">New Review</a>
                    </li>
                </ul>
                <div>
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    </div>`
})
export default class ProductDetailComponent implements DoCheck {

    public product: any = {};

    constructor(private route: ActivatedRoute, private svc: ProductService) {
        const id = route.snapshot.paramMap.get("id");
        // fetch the data
        svc.getById(id)
            .subscribe((res: any) => {
                this.product = res;
                svc.reviews = res.reviews;
            }, err => {
                console.log(err);
            });
    }

    ngDoCheck(): boolean {
        return true;
    }
}
