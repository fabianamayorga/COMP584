import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // needs something to return 
  login(loginRequest: LoginRequest): Observable<LoginResponse>{
    
  }
}
