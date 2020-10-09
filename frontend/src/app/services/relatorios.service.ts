import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  public url = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getMunicipio(){
    return this.http.get(this.url + 'municipios');
  }

  getTotal(id){
    return this.http.get(`${this.url}total-mes/${id}`);
  }

  getTotalDia(id){
    return this.http.get(`${this.url}total-dia/${id}`);
  }

  getPlanoMaisVendido(id){
    return this.http.get(`${this.url}plano-mais-vendido/${id}`);
  }

  getPlanosVendidosDescricao(id){
    return this.http.get(`${this.url}planos-vendidos-descricao/${id}`)
  }
  getPlanosVendidosQtd(id){
    return this.http.get(`${this.url}planos-vendidos-qtd/${id}`)
  }

  getVendasPorMes(id){
    return this.http.get(`${this.url}vendas-mes/${id}`)
  }

  getVendasPorMesValor(id){
    return this.http.get(`${this.url}vendas-mes-valor/${id}`)
  }

  getVendasPorVendedor(id){
    return this.http.get(`${this.url}vendas-por-vendedor/${id}`)
  }
  getVendasPorVendedorQtd(id){
    return this.http.get(`${this.url}vendas-por-vendedor-qtd/${id}`)
  }

  getVendasPorPlano(id){
    return this.http.get(`${this.url}vendas-por-plano/${id}`)
  }
  getVendasPorPlanoValor(id){
    return this.http.get(`${this.url}vendas-por-plano-valor/${id}`)
  }

  getVendasPorVendedorMes(id, vendedor){
    return this.http.get(`${this.url}vendas-por-vendedor-mes/${id}/${vendedor}`);
  }
  getVendasPorVendedorMesValor(id, vendedor){
    return this.http.get(`${this.url}vendas-por-vendedor-mes-valor/${id}/${vendedor}`);
  }
}
