import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
    name:'time'
})
export default class TimePipe implements PipeTransform {
    
    transform(value: any, ...args: any[]) {
        return moment(value).fromNow();
    }
}