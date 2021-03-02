import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(dados){
    return this.http.post('https://toppnetstatus.herokuapp.com/email', dados);
  }
}
