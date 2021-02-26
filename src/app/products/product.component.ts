import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `
    <td>{{product.brand | uppercase}}</td>
    <td>{{product.model | lowercase}}</td>
    <td>{{product.price | currency}}</td>
    <td>
        <input  disabled type="checkbox" [checked]="product.inStock"/>
    </td>
    <td>{{ product.updatedDate | time}}</td>
    <td>
        <img class="rounded-circle" [src]="product.img" width="130" height="120" />
    </td>`
})
export default class ProductComponent {
    @Input() product: any;
}

// HTTP Verbs:
// GET:read, POST:create (payload), PUT:update, DELETE:delete, PATCH: partial update
// Status codes: 
//              1xx - information
//              2xx - 200, 201, 204 - success
//              3xx -               - redirection
//              4xx -  404,401      - client errors
//              5xx -  500,502      - server errors
// Format: url, headers, body
// https://api.github.com/users
// Request Headers: { content-type: 'application/json',x-abc:'', authorization:'adkfj:dfkfdk' }, 
// Response Headers :{content-typpe: 'application/xml'}
// body/payload