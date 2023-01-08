import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<Result<string>> {
    return this.http.post<Result<string>>(environment.apiUrl + '/UserAuth/login', {
      username: username,
      password: password,
    });
  }

  public register(
    username: string,
    email: string,
    password: string,
    age: number,
    height: number,
    gender : number
  ): Observable<Result<string>> {
    return this.http.post<Result<string>>(
      environment.apiUrl + '/UserAuth/register',
      {
        username: username,
        email: email,
        password: password,
        age: age,
        gender: gender,
        height: height
      }
    );
  }
}
