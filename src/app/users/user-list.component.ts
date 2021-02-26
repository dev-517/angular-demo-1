import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";


@Component({
    selector: 'app-user-list',
    template: `
        <div class="col-md-5">
        <h3>Users</h3>
        <hr/>
            <div *ngFor="let user of users">
                <app-user [data]="user"></app-user>
            </div>
        </div>
    `
})
export default class UserListComponent {

    users: any = [];

    // DI
    constructor(http: HttpClient) {
        http.get("https://api.github.com/users")
            .subscribe((res) => {
                this.users = res;
                console.log(this.users);
            });
    }

}