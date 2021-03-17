import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import UserService from "../common/user.service";

@Component({
    template: `
    <div class="col-md-5">
        <div *ngIf="hasError" class="alert alert-danger">
            Something went wrong
        </div>
        <div *ngIf="hasAuthError" class="alert alert-danger">
            Invalid username or password
        </div>
        <h3>Login</h3>
        <form [formGroup]="loginForm">
            <div class="form-group">
                <input formControlName="username" class="form-control" type="text" placeholder="Email" />
            </div>
            <div class="form-group">
                <input formControlName="password" class="form-control" type="password" placeholder="Password" />
            </div>
            <div class="form-group">
                <button (click)="onLogin()" [disabled]="loginForm.invalid" class="btn btn-success">Login</button>
            </div>
        </form>
    </div>    
    `
})
export default class LoginComponent {
    loginForm: FormGroup;
    hasError: boolean = false;
    hasAuthError: boolean = false;

    constructor(fb: FormBuilder, private router: Router,
        private svc: UserService) {
        this.loginForm = fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    onLogin() {
        this.svc.login(this.loginForm.value)
            .subscribe((res: any) => {
                localStorage.setItem('token', res.token);
                // redirect
                this.router.navigate(['/products']);
            }, err => {
                if (err.status === 401) {
                    this.hasAuthError = true;
                } else {
                    this.hasError = true;
                }
            });
    }
}
