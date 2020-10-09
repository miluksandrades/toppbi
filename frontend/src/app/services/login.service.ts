import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL = 'http://localhost:3333/'
  
  constructor(private http: HttpClient) {}

  getPlanos(): Observable<any>{
    return this.http.get(this.API_URL)
  }
}
