import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetoresService {

  public url = 'http://10.200.2.136:3333/' + 'setor';

  constructor(private http: HttpClient) { }

  getSetor(){
    return this.http.get(this.url);
  }

  createSetor(data){
    return this.http.post(this.url, data);
  }

  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
