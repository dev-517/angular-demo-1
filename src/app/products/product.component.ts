import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `
    <div class="col-md-3">
        <div class="card" style="margin-top:10px">
            <img class="card-img-top" [src]="product.image"/>
            <div class="card-body">
                <h5>{{product.brand | uppercase}}</h5>
                <h6>{{product.model | lowercase}}</h6>
                <b>{{product.price | currency}}</b>
                <div>Last Updated: {{ product.updatedDate | time}}</div>
                <button [disabled]="!product.inStock" class="btn btn-sm btn-primary">Buy Now</button>
        </div>
       </div>
    </div>`
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