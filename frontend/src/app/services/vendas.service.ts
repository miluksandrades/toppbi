import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  public url = AppConstants.baseUrl + 'vendas';

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
