import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';


@Injectable({
  providedIn: 'root'
})
export class TorresService {
  public url = AppConstants.baseUrl + 'torres'
  public radios = AppConstants.baseUrl + 'radios'
  public equipamentos = AppConstants.baseUrl + 'equipamentos';
  public resumo = AppConstants.baseUrl + 'resumo';

  constructor(private http: HttpClient) { }

  getImagemId(id) {
    return this.http.get(`${this.url}/imagens/${id}`)
  }
  deleteImagem(id) {
    return this.http.delete(`${this.url}/imagens/${id}`)
  }

  getTorresAtm() {
    return this.http.get(this.url + '-atm');
  }

  getTorresBn() {
    return this.http.get(this.url + '-bn');
  }
  getTorresMed() {
    return this.http.get(this.url + '-med');
  }

  getConexaoAtm(){return this.http.get(AppConstants.baseUrl + 'total-conexoes-atm')}
  getConexaoBn(){return this.http.get(AppConstants.baseUrl + 'total-conexoes-bn')}
  getConexaoMed(){return this.http.get(AppConstants.baseUrl + 'total-conexoes-med')}
  getNumConexoes(id){return this.http.get(`${AppConstants.baseUrl}torres/conexoes/${id}`)}

  getResumoRadios() {
    return this.http.get(this.resumo + '-radios')
  }

  getResumoEquipamentos() {
    return this.http.get(this.resumo + '-equipamentos')
  }

  getResumoAntenas() {
    return this.http.get(this.resumo + '-antenas')
  }

  getTorreById(id) {
    return this.http.get(`${this.url}/${id}`)
  }

  alterTorre(data, id) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  postTorre(data) {
    return this.http.post(this.url, data);
  }

  deleteTorre(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getRadios(id) {
    return this.http.get(`${this.radios}/${id}`)
  }

  getRadioById(id) {
    return this.http.get(`${this.radios}/radio/${id}`)
  }

  alterRadios(data, id) {
    return this.http.put(`${this.radios}/${id}`, data);
  }

  createRadio(data, id) {
    return this.http.post(`${this.radios}/${id}`, data);
  }

  deleteRadio(id) {
    return this.http.delete(`${this.radios}/${id}`)
  }

  getEquipamentos(id) {
    return this.http.get(`${this.equipamentos}/${id}`);
  }

  getEquipamentosById(id) {
    return this.http.get(`${this.equipamentos}/equipamento/${id}`)
  }

  createEquipamento(data, id) {
    return this.http.post(`${this.equipamentos}/${id}`, data);
  }

  alterEquipamentos(data, id){
    return this.http.put(`${this.equipamentos}/${id}`, data);
  }

  deleteEq(id) {
    return this.http.delete(`${this.equipamentos}/${id}`);
  }
}
