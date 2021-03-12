import { Component } from "@angular/core";

@Component({
    selector: 'app-new-review',
    template: `<h3>New Review</h3>
        <div class="form-group">
            <input class="form-control" type="text" placeholder="Rating"/>
        </div>
        <div class="form-group">
            <input class="form-control" type="text" placeholder="Subject"/>
        </div>
        <div class="form-group">
            <input class="form-control" type="text" placeholder="Message"/>
        </div>
        <div class="form-group">
           <button class="btn btn-success">Submit</button>
         </div>
    `
})
export default class NewReviewComponent { }