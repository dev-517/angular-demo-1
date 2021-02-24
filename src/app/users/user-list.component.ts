import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";


@Component({
    selector: 'app-user-list',
    template: ` <h3>Users</h3>

    {{users | json}}
        <div>
            <div *ngFor="let user of users">
                <h4>{{user.login}}</h4>
            </div>
        </div>
    
    `
})
export default class UserListComponent {

    users = [];

    // DI
    constructor(http: HttpClient) {
        http.get("https://api.github.com/users")
            .subscribe(function (res) {
                this.users = res;
                console.log(this.users);
            });
    }

}