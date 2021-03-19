import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";
import UserService from "../common/user.service";

@Injectable()
export default class ProductGaurd implements CanActivate, CanActivateChild {

    constructor(private userSvc: UserService) { }

    canActivate() {
        return this.userSvc.isUserLoggedIn();
    }

    canActivateChild() {
        return this.userSvc.isUserLoggedIn();
    }
}