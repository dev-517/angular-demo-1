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
        const formData = this.getFormData();

        this.productSvc.post(formData)
            .subscribe(res => {
                this.reset();
            }, e => {
                this.setError();
            });
    }

    private getFormData() {
        const formData = new FormData();

        for (let key in this.product) {
            formData.append(key, this.product[key]);
        }

        // formData.append("brand", this.product.brand);
        // formData.append("model", this.product.model);
        // formData.append("price", this.product.price);
        // formData.append("inStock", this.product.inStock);
        // formData.append("image", this.product.image);
        return formData;
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

    public onFileChange(event): void {
        if (event.target.files.length > 0) {
            this.product.image = event.target.files[0];
        }
    }
}