import { Component } from "@angular/core";

@Component({
    selector: 'app-contactus',
    template: `
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" [(ngModel)]="contact.name"/>
        <br/><br/>
        
        <input type="text" placeholder="Mobile" [(ngModel)]="contact.mobile"/>
        <br/><br/>

        Promotional Calls Consent: <input type="checkbox" [(ngModel)]="contact.consent" />
        <br/><br/>
        
        <button (click) = "onSave()">Save</button> 

        <img [src]="imgUrl"/>

        <br/><br/>
    `
})
export default class ContactComponent {

    public imgUrl: string = "https://avatars.githubusercontent.com/u/1?v=4";

    public contact = {
        name: "",
        mobile: "",
        consent: false
    };

    public onSave(): void {
        console.log(this.contact);
        // save it to backend server. api 
    }
}