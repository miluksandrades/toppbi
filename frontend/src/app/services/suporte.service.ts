import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuporteService {

  public url_canc = environment.BASE_URL + 'cancelamento'
  public url_ret = environment.BASE_URL + 'retencao'
  public url_mig = environment.BASE_URL + 'migracao'
  public url_mudend = environment.BASE_URL + 'mudendereco'
  public url_mudplan = environment.BASE_URL + 'mudplano'

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
