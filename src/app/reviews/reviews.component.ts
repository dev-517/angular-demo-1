import { Component, Input } from "@angular/core";
import ProductService from "../services/product.service";

@Component({
    selector: 'app-reviews',
    template: `<h4>Reviews</h4>
        <div *ngFor="let review of reviews">
            <h6>{{review.subject}} {{review.rating}} *</h6>
            <div>{{review.message}}</div>
            <hr/>
        </div>
    `
})
export default class ReviewsComponent {

    reviews: any[];

    constructor(svc: ProductService) {
        this.reviews = svc.reviews;
    }
}