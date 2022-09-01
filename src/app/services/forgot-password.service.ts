import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  forgetPassword(email:String): Observable<any> {
    let url="http://localhost:8090/homeloanappln/forgot_password/"+email;
    return this.http.get(url,{responseType: 'text'});
  }
}
