// directives
// ngIf, ngFor, ngSwitch, ngClass, ngStyle, ngModel
// ngClass: string, array, object
// ngStyle: object
// Directives: Attribute directives, Structural directives

import { Component } from "@angular/core";


@Component({
    selector: 'app-result',
    template: `
         <h1 [class.pass]="marks>=40" [class.fail]="marks<40">Result</h1>

         <h2 [ngClass]="['active','bold']">NG Class Demo</h2>
         <h2 [ngClass]="{pass:marks>=40, fail:marks<40}">NG Class Demo</h2>

         <h3 [ngStyle]="{border:'1px solid grey'}">NG Style</h3>

         <h1 *ngIf="getResult()">Pass</h1>
         <h1 *ngIf="getResult()">Fail</h1>

         <div [ngSwitch]="marks">
            <h4 *ngSwitchCase="70">Distinction</h4>
            <h4 *ngSwitchCase="60">First Class</h4>
            <h4 *ngSwitchCase="50">Second Class</h4>
            <h4 *ngSwitchCase="40">Third Class</h4>
            <h4 *ngSwitchDefault>Failed</h4>
         </div>

        <table class="table table-bordered" width="100%">
            <thead>
                <tr>
                    <th>Value</th>
                    <th>Index</th>
                    <th>IsEven</th>
                    <th>IsOdd</th>
                    <th>First</th>
                    <th>Last</th>
                </tr>
            </thead>
            <tbody>
                <tr [ngClass]="{odd:odd,even:evn}" *ngFor="let val of arr; let idx=index; let evn=even;let odd=odd;let fst=first; let lst = last">
                    <td>{{val}}</td>
                    <td>{{idx}}</td>
                    <td>{{evn}}</td>
                    <td>{{odd}}</td>
                    <td>{{fst}}</td>
                    <td>{{lst}}</td>
                </tr>
            </tbody>
        </table>
    `
})
export default class ResultComponent {

    marks: number = 30;
    myProp = [];

    arr = [1, 2, 3, 4, 9];
    // everything is a value, truthy/falsy
    // falsy: 0,"",null,undefined,false,NaN

    public getResult(): boolean {
        if (this.marks >= 40) return true;
        else return false;
    }
}