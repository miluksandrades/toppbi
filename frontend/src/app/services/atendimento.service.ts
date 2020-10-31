import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  public base_url = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getAtendimentos(){
    return this.http.get(this.base_url + 'total-atendimento');
  }

  getAtendimentoDia(dtinicio, dtfim){
    return this.http.get(`${this.base_url}atendimento-dia/${dtinicio}/${dtfim}`);
  }

  getAtendimentoQtd(dtinicio, dtfim){
    return this.http.get(`${this.base_url}atendimento-qtd/${dtinicio}/${dtfim}`);
  }

  getAtendimentoWhatsapp(){
    return this.http.get(this.base_url + 'atendimento-whatsapp');
  }

  getAtendimentoWhatsappMes(){
    return this.http.get(this.base_url + 'atendimento-whatsapp-mes');
  }

  getAtendimentoWhatsappQtd(){
    return this.http.get(this.base_url + 'atendimento-whatsapp-qtd');
  }

  getAtendimentoFacebook(){
    return this.http.get(this.base_url + 'atendimento-facebook');
  }

  getAtendimentoFacebookMes(){
    return this.http.get(this.base_url + 'atendimento-facebook-mes');
  }

  getAtendimentoFacebookQtd(){
    return this.http.get(this.base_url + 'atendimento-facebook-qtd');
  }

  getAtendimentoPorAgente(){
    return this.http.get(this.base_url + 'atendimento-por-agente')
  }

  getAntendimentoPorAgenteTabela(){
    return this.http.get(this.base_url + 'atendimento-por-agente-tabela');
  }
  
  getAtendimentoPorAgenteQtd(){
    return this.http.get(this.base_url + 'atendimento-por-agente-qtd')
  }

  getAtendimentoGeral(){
    return this.http.get(this.base_url + 'atendimento-geral');
  }

  totalGeral(){
    return this.http.get(this.base_url + 'atendimento-soma-geral');
  }

}
