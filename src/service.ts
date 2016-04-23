import {Injectable} from "angular2/core";

@Injectable()
export class SampleService {
    public title: string = "Sample service";
    
    constructor() {
        console.log('hello from sample service');
    }
}