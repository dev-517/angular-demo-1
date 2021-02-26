import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-user',
    template: `<h4>{{data.login}}</h4>
    <img [src]="data.avatar_url" class="rounded-circle" width="100" height="100"/>
    
    <div>
        <label>Site Admin </label>
        <input type="checkbox" [checked]="data.site_admin"/>
    </div>

    <hr/>`
})
export default class UserComponent {
    @Input() data: any;
}