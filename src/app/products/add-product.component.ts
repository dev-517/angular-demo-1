import { Component } from "@angular/core";
import ProductService from "../services/product.service";

// template driven forms
// Reactive forms
// validations: required, min, max, pattern (regex) 
// abc@gmail.com (correct format)

@Component({
    selector: 'app-add-product',
    template: `

    <div class="offset-md-1 col-md-5">
        <div *ngIf="success" class="alert alert-success">
            Successfully Saved!
        </div>
        <div *ngIf="hasError" class="alert alert-danger">
            Failed to Save
        </div>
        <form>
            <h3>Add New Product</h3>
            <div class="form-group">
                <input name="brand" required [(ngModel)]="product.brand" class="form-control" type="text" placeholder="Brand"/>
            </div>
            <div class="form-group">
                <input name="model" minlength="3" maxlength="10" [(ngModel)]="product.model" class="form-control" type="text" placeholder="Model"/>
            </div>
            <div class="form-group">
                <input name="price" [(ngModel)]="product.price" class="form-control" type="text" placeholder="Price"/>
            </div>
            <div class="form-group">
                <label>In Stock</label>
                <input name="inStock" [(ngModel)]="product.inStock" type="checkbox"/>
            </div>
            <div class="form-group">
                <button (click)="onSave()" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
    `
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