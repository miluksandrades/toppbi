import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TorresService {
  public url = 'http://10.200.2.136:3333/' + 'torres'
  public radios = 'http://10.200.2.136:3333/' + 'radios'
  public equipamentos = 'http://10.200.2.136:3333/' + 'equipamentos';
  public resumo = 'http://10.200.2.136:3333/' + 'resumo';

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

  getConexaoAtm(){return this.http.get('http://10.200.2.136:3333/' + 'total-conexoes-atm')}
  getConexaoBn(){return this.http.get('http://10.200.2.136:3333/' + 'total-conexoes-bn')}
  getConexaoMed(){return this.http.get('http://10.200.2.136:3333/' + 'total-conexoes-med')}
  getNumConexoes(id){return this.http.get(`${'http://10.200.2.136:3333/'}torres/conexoes/${id}`)}

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
