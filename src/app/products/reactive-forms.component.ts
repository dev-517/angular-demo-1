import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import ProductService from "../services/product.service";


// reactive forms

@Component({
    selector: 'app-reactive-form',
    styleUrls: ['reactive-forms.css'],
    template: `
        <div class="offset-md-1 col-md-5">
            <div *ngIf="isSuccess" class="alert alert-success">
                Successfully Saved!
            </div>
            <div *ngIf="hasError" class="alert alert-danger">
                Failed to save.
            </div>
            <h3>Reactive Form</h3>
            <form [formGroup]="frm">
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Brand" formControlName="brand"/>
                    <span *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.required" class="text-danger">Brand is Required</span>
                    <span *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.minlength" class="text-danger">Min. 3 characters</span>
                    <span *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.maxlength" class="text-danger">Max. 10 characters</span>
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Model" formControlName="model"/>
                    <span class="text-danger" *ngIf="frm.controls.model.touched && frm.controls.model.errors?.required">Model is Required</span>
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Price" formControlName="price"/>
                 </div>
                 <div class="form-group">
                    <label>In Stock?</label>
                    <input type="checkbox" formControlName="inStock"/>
                 </div>
                 <div class="form-group">
                    <label>Image</label>
                    <input type="file" (change)="onFileChange($event)"/>
              </div>
                 <div class="form-group">
                    <button [disabled]="frm.invalid" (click)="onSave()" class="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    `
})
export default class ReactiveFormsComponent {
    frm: FormGroup;
    isSuccess: boolean = false;
    hasError: boolean = false;

    constructor(fb: FormBuilder, private productSvc: ProductService) {
        this.frm = fb.group({
            brand: ['', [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10)]],
            model: ['', [Validators.required]],
            price: [0,],
            inStock: [true],
            image: []
        });
    }

    public onSave(): void {
        const formData = this.getFormData();

        this.productSvc.post(formData)
            .subscribe(res => {
                this.frm.reset();
                this.isSuccess = true;
                this.hasError = false;
                this.reset();
            }, e => {
                this.hasError = true;
                this.isSuccess = false;
                this.reset();
            });
    }

    private getFormData() {
        const formData = new FormData();

        for (let key in this.frm.value) {
            formData.append(key, this.frm.value[key]);
        }


        // formData.append("brand", this.frm.value.brand);
        // formData.append("model", this.frm.value.model);
        // formData.append("price", this.frm.value.price);
        // formData.append("inStock", this.frm.value.inStock);
        // formData.append("image", this.frm.value.image);

        return formData;
    }

    private reset(): void {
        setTimeout(() => {
            this.isSuccess = false;
            this.hasError = false;
        }, 2000);
    }

    public onFileChange(event): void {
        if (event.target.files.length > 0) {
            this.frm.patchValue({
                image: event.target.files[0]
            });
        }
    }

    public onDeactivate(): boolean {
        if (this.frm.dirty && this.frm.valid) {
            return false;
        }
        return true;
    }
}
