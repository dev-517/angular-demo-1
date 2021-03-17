import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export default class UserService {

    constructor(private http: HttpClient) { }

    public login(user: any) {
        return this.http.post("https://dl-product.herokuapp.com/api/users/login", user);
    }
}