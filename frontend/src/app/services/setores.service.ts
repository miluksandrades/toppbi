import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class SetoresService {

  public url = AppConstants.baseUrl + 'setor';

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
