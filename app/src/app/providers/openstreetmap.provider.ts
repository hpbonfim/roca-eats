import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class OpenStreetMapProvider {
    baseUrl = "https://nominatim.openstreetmap.org/search?format=json&q=";

    constructor(public http: HttpClient) {

    }
    
    callService(address: String): any {
        console.log(address);
        return this.http.get(this.baseUrl + address);
    }
}