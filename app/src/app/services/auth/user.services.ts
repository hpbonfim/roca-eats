import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(@SkipSelf() private http: HttpClient) { }
    
    register(user: User){
        const apiUrl = API_URL + '/users';
        return this.http.post(apiUrl, user, httpOptions);
    }

    getUser(email: String){
        const apiUrl = API_URL + '/user/' + email;
        return this.http.get(apiUrl, httpOptions);
    }
}