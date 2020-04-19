import { User } from 'src/app/models/user.model';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(@SkipSelf() private http: HttpClient) { }

    isAuthenticated(): boolean {
      return true;
    }

    login(email: string, password: string){
      const url = API_URL + '/authenticate';

      const params = new HttpParams()
      .set('email', email)
      .set('password', password);

      console.log(params);

      return this.http.get(url, {params});
    }
}