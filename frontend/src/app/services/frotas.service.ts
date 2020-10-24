import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrotasService {

  url_frota = environment.BASE_URL + 'frota/'

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
    return this.http.get(`${environment.BASE_URL}combustivel-mes/${id}`);
  }

  getCombustivelMesQtd(id){
    return this.http.get(`${environment.BASE_URL}combustivel-mes-qtd/${id}`);
  }

  getKmMes(id){
    return this.http.get(`${environment.BASE_URL}km-mes/${id}`);
  }
  getKmMesQtd(id){
    return this.http.get(`${environment.BASE_URL}km-mes-qtd/${id}`);
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
  getQuilometrosRodados(){
    return this.http.get(environment.BASE_URL + 'km-rodados');
  }

  getLitrosGastos(){
    return this.http.get(environment.BASE_URL + 'litros-gastos');
  }

  getCustoMensal(){
    return this.http.get(environment.BASE_URL + 'custo-mensal');
  }

  mediaCustoPorKm(){
    return this.http.get(environment.BASE_URL + 'media-custo-km');
  }

  mediaKmPorLitro(){
    return this.http.get(environment.BASE_URL + 'km-por-litro');
  }

  getMetragemId(id){
    return this.http.get(`${environment.BASE_URL}metragem/${id}`);
  }

  consumoGeralMes(){
    return this.http.get(environment.BASE_URL + 'consumo-geral-mes')
  }

  consumoGeralKm(){
    return this.http.get(environment.BASE_URL + 'consumo-geral-km')
  }
}
