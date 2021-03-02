import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  public url = AppConstants.baseUrl + 'vendedor';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  getVendedorByMunicipio(id){
    return this.http.get(`${this.url}/${id}`);
  }

  createVendedor(data){
    return this.http.post(this.url, data);
  }

  deleteVendedor(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
