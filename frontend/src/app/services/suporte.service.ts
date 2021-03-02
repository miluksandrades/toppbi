import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class SuporteService {

  public url_canc = AppConstants.baseUrl + 'cancelamento'
  public url_ret = AppConstants.baseUrl + 'retencao'
  public url_mig = AppConstants.baseUrl + 'migracao'
  public url_mudend = AppConstants.baseUrl + 'mudendereco'
  public url_mudplan = AppConstants.baseUrl + 'mudplano'

  constructor(private http: HttpClient) { }

  getCancPorMes(){
    return this.http.get(this.url_canc)
  }
  getCancPorMesQtde(){
    return this.http.get(this.url_canc + '-qtde')
  }
  getRetPorMes(){
    return this.http.get(this.url_ret)
  }
  getRetPorMesQtde(){
    return this.http.get(this.url_ret + '-qtde')
  }

  getMigPorMes(){
    return this.http.get(this.url_mig);
  }
  getMigPorMesQtde(){
    return this.http.get(this.url_mig + '-qtde');
  }
  
  getMudEndPorMes(){
    return this.http.get(this.url_mudend);
  }
  getMudEndPorMesQtde(){
    return this.http.get(this.url_mudend + '-qtde');
  }

  getMudPlanPorMes(){
    return this.http.get(this.url_mudplan);
  }
  getMudPlanPorMesQtde(){
    return this.http.get(this.url_mudplan + '-qtde');
  }

  createCanc(data){
    return this.http.post(this.url_canc, data);
  }

  createRet(data){
    return this.http.post(this.url_ret, data);
  }

  createMig(data){
    return this.http.post(this.url_mig, data);
  }

  createMudEnd(data){
    return this.http.post(this.url_mudend, data)
  }

  createMudPlan(data){
    return this.http.post(this.url_mudplan, data)
  }

}
