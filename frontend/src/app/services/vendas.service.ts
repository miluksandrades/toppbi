import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  public url = 'http://10.200.2.136:3333/' + 'vendas';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  createVenda(data){
    return this.http.post(this.url, data);
  }

  deleteVenda(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
