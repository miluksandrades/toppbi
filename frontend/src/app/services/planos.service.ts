import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class PlanosService {

  public planos_url = AppConstants.baseUrl + 'planos';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(this.planos_url);
  }

  getPlanoByMunicipio(id){
    return this.http.get(`${this.planos_url}/${id}`);
  }

  create(data){
    return this.http.post(this.planos_url, data);
  }

  delete(id){
    return this.http.delete(`${this.planos_url}/${id}`);
  }


}
