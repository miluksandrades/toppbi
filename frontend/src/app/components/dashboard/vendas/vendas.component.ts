import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/services/vendas.service';
import { VendedoresService } from 'src/app/services/vendedores.service';
import { PlanosService } from 'src/app/services/planos.service';
import { RelatoriosService } from 'src/app/services/relatorios.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  public vendas: any;
  public vendedor: any;
  public planos: any;
  public municipios: any;
  public muni_id: any;

  vendaForm = {
    dtvenda: '',
    valor: '',
    qtde: '',
    vendedor: '',
    plano: '',
    municipio: ''
  }

  pageOfItems: Array<any>;

  
  constructor(private api: VendasService, private vendedor_api: VendedoresService, private plano_api: PlanosService, private municipio: RelatoriosService) {
    this.getVendas();
    
    this.municipio.getMunicipio().subscribe(data => {
      this.municipios = data;
    }, error => console.log(error));
    
  }
  
  ngOnInit(): void {
  }
  
  getMuniId(id: any) {
    this.muni_id = id.target.value;

    this.plano_api.getPlanoByMunicipio(this.muni_id).subscribe(data => {
      this.planos = data;
    }, error => console.log(error));

    this.vendedor_api.getVendedorByMunicipio(this.muni_id).subscribe(data =>{
      this.vendedor = data;
    }, error => console.log(error));
  }

  getVendas() {
    this.api.getAll().subscribe(data => {
      this.vendas = data
    }, error => console.log(error));
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  novaVenda() {
    const data = {
      dtvenda: this.vendaForm.dtvenda,
      valor: this.vendaForm.valor,
      qtde: this.vendaForm.qtde,
      fkvendedor: this.vendaForm.vendedor,
      fkplano: this.vendaForm.plano,
      fkmunicipio: this.vendaForm.municipio
    }

    console.log(data);
    this.api.createVenda(data).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

  deleteVenda(id) {
    this.api.deleteVenda(id).subscribe(res => {
      console.log(res);
      location.reload()
    }, error => console.log(error));
  }

}
