import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrotasService {
  
  url_frota = 'http://10.200.2.136:3333/' + 'frota/'
  base_url = 'http://10.200.2.136:3333/';

  constructor(private http: HttpClient) { }

  createCarro(data){
    return this.http.post(`${this.url_frota}carros`, data);
  }
  
  createEquipe(data){
    return this.http.post(`${this.url_frota}equipes`, data);
  }

  getCarros(){
    return this.http.get(this.url_frota + 'carros');
  }

  getEquipe(){
    return this.http.get(this.url_frota + 'equipes');
  }

  getEquipeById(id){
    return this.http.get(`${this.url_frota}equipes/${id}`);
  }

  getCarrosById(id){
    return this.http.get(`${this.url_frota}carros/${id}`);
  }

  getCarroInfo(id){
    return this.http.get(`${this.url_frota}carros/info/${id}`)
  }

  getCombustivelMes(id){
    return this.http.get(`${this.base_url}combustivel-mes/${id}`);
  }

  getCombustivelMesQtd(id){
    return this.http.get(`${this.base_url}combustivel-mes-qtd/${id}`);
  }

  getKmMes(id){
    return this.http.get(`${this.base_url}km-mes/${id}`);
  }
  getKmMesQtd(id){
    return this.http.get(`${this.base_url}km-mes-qtd/${id}`);
  }

  alterCarro(data, id){
    return this.http.put(`${this.url_frota}carros/${id}`, data);
  }

  alterEquipe(data, id){
    return this.http.put(`${this.url_frota}equipes/${id}`, data);
  }

  deleteCarro(id){
    return this.http.delete(`${this.url_frota}carros/${id}`);
  }

  deleteEquipe(id){
    return this.http.delete(`${this.url_frota}equipes/${id}`);
  }

  //RELATORIOS
  getQuilometrosRodados(mes){
    return this.http.get(`${this.base_url}km-rodados/${mes}`);
  }

  getLitrosGastos(mes){
    return this.http.get(`${this.base_url}litros-gastos/${mes}`);
  }

  getCustoMensal(mes){
    return this.http.get(`${this.base_url}custo-mensal/${mes}`);
  }

  mediaCustoPorKm(mes){
    return this.http.get(`${this.base_url}media-custo-km/${mes}`);
  }

  mediaKmPorLitro(mes){
    return this.http.get(`${this.base_url}km-por-litro/${mes}`);
  }

  getMetragemId(id){
    return this.http.get(`${this.base_url}metragem/${id}`);
  }

  consumoGeralMes(){
    return this.http.get(this.base_url + 'consumo-geral-mes')
  }

  consumoGeralKm(){
    return this.http.get(this.base_url + 'consumo-geral-km')
  }
}
