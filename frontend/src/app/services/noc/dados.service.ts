import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  public url = 'http://10.200.2.136:3333/'

  constructor(private http: HttpClient) { }

  getOperadoras(){
    return this.http.get(this.url + 'operadoras');
  }
  getTipoReg(){
    return this.http.get(this.url + 'tipo-ocorrencia');
  }

  getFiveTask(){
    return this.http.get(this.url + 'ultimos-registros');
  }

  getAllToday(){
    return this.http.get(this.url + 'total-hoje');
  }

  getAllMonth(){
    return this.http.get(this.url + 'total-mes');
  }

  getAllTaskPerOperator(){
    return this.http.get(this.url + 'total-ocorrencias');
  }

  getMorDown(){
    return this.http.get(this.url + 'mais-quedas');
  }

  createOcorrencia(data){
    return this.http.post(this.url + 'ocorrencia', data);
  }

  getBrava(){
    return this.http.get(this.url + 'resultado-brava')
  }
  getBravaQtde(){
    return this.http.get(this.url + 'resultado-brava-qtde')
  }

  getJunto(){
    return this.http.get(this.url + 'resultado-junto')
  }
  getJuntoQtde(){
    return this.http.get(this.url + 'resultado-junto-qtde')
  }

  getVivo(){
    return this.http.get(this.url + 'resultado-vivo')
  }
  getVivoQtde(){
    return this.http.get(this.url + 'resultado-vivo-qtde')
  }

  getSea(){
    return this.http.get(this.url + 'resultado-sea')
  }
  getSeaQtde(){
    return this.http.get(this.url + 'resultado-sea-qtde')
  }

  getDownPerOperator(){
    return this.http.get(this.url + 'quedas-por-operadora')
  }
  getDownPerOperatorQtde(){
    return this.http.get(this.url + 'quedas-por-operadora-qtde')
  }

  getBravaOcorrenciaPorMes(){
    return this.http.get(this.url + 'ocorrencias-por-mes-brava')
  }
  getBravaOcorrenciaPorMesQtd(){
    return this.http.get(this.url + 'ocorrencias-por-mes-brava-qtd')
  }
  getJuntoOcorrenciaPorMes(){
    return this.http.get(this.url + 'ocorrencias-por-mes-junto')
  }
  getJuntoOcorrenciaPorMesQtd(){
    return this.http.get(this.url + 'ocorrencias-por-mes-junto-qtd')
  }
  getVivoOcorrenciaPorMes(){
    return this.http.get(this.url + 'ocorrencias-por-mes-vivo')
  }
  getVivoOcorrenciaPorMesQtd(){
    return this.http.get(this.url + 'ocorrencias-por-mes-vivo-qtd')
  }

  getSeaOcorrenciaPorMes(){
    return this.http.get(this.url + 'ocorrencias-por-mes-sea')
  }
  getSeaOcorrenciaPorMesQtd(){
    return this.http.get(this.url + 'ocorrencias-por-mes-sea-qtd')
  }

  getOcorrenciaPorMes(){
    return this.http.get(this.url + 'ocorrencias-por-mes');
  }
  getOcorrenciaPorMesQtd(){
    return this.http.get(this.url + 'ocorrencias-por-mes-qtd');
  }


}
