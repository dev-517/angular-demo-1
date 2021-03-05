import { Component } from "@angular/core";
import ProductService from "../services/product.service";

// template driven forms
// Reactive forms
// validations: required, min, max, pattern (regex) 
// abc@gmail.com (correct format)

@Component({
    selector: 'app-add-product',
    styleUrls: ['add-product.css'],
    templateUrl: 'add-product.component.html'
})
export default class AddProductComponent {

    public success: boolean = false;
    public hasError: boolean = false;

    constructor(private productSvc: ProductService) { }

    public product: any = {};

    public onSave(): void {
        this.productSvc.post(this.product)
            .subscribe(res => {
                this.reset();
            }, e => {
                this.setError();
            });
    }

    private reset(): void {
        this.success = true;
        this.hasError = false;
        this.product = {};
    }

    public setError(): void {
        this.success = false;
        this.hasError = true;
    }
}