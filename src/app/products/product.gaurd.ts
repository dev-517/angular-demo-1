import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, CanDeactivate } from "@angular/router";
import UserService from "../common/user.service";
import AddProductComponent from "./add-product.component";
import ReactiveFormsComponent from "./reactive-forms.component";

// canActivate
// canActivateChild
// canDeactivate
// resolve

@Injectable()
export default class ProductGaurd implements
    CanActivate, CanActivateChild, CanDeactivate<ReactiveFormsComponent> {

    constructor(private userSvc: UserService) { }

    canActivate() {
        return this.userSvc.isUserLoggedIn();
    }

    canActivateChild() {
        return this.userSvc.isUserLoggedIn();
    }

    canDeactivate(comp: ReactiveFormsComponent) {
        return comp.onDeactivate();
    }
}