import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/services/vendedores.service';
import { RelatoriosService } from 'src/app/services/relatorios.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  public vendedores: any;
  public municipios: any;

  public vendedorForm = {
    nome: '',
    municipio: ''
  }

  constructor(private api: VendedoresService, private municipio: RelatoriosService) {
    this.getVendedor();

    this.municipio.getMunicipio().subscribe(data => {
      this.municipios = data;
    }, error => console.log(error));
  }

  ngOnInit(): void {
  }

  getVendedor(){
    this.api.getAll().subscribe(data =>{
      this.vendedores = data;

    }, error => console.log(error));
  }

  createVendedor(){
    const data ={
       nome: this.vendedorForm.nome,
       fkmunicipio: this.vendedorForm.municipio
    }

    this.api.createVendedor(data).subscribe(res =>{
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

  deleteVendedor(id){
    this.api.deleteVendedor(id).subscribe(res =>{
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

}
