import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class IBGEProvider {
    baseUrl = "https://servicodados.ibge.gov.br/api/v1";

    constructor(public http: HttpClient) {

    }

    getStates(): any{
        var url = this.baseUrl + "/localidades/estados"

        return this.http.get(url);
    }
}