import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  public url = environment.BASE_URL + 'vendedor';

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
