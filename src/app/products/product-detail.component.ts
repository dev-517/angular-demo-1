import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `<h3>Product Detail</h3>`
})
export default class ProductDetailComponent {
    constructor(private route: ActivatedRoute) {
        console.log(route.snapshot.paramMap.get("id"));
    }
}
