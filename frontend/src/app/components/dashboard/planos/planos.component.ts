import { Component, OnInit } from '@angular/core';
import { PlanosService } from 'src/app/services/planos.service';
import { RelatoriosService } from 'src/app/services/relatorios.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  public planos: any;
  public municipios: any;

  public planoForm = {
    descricao: '',
    valor: '',
    municipio: ''
  }

  constructor(private api: PlanosService, private municipio: RelatoriosService) {
    this.getPlanos();
    this.getMunicipio();
  }

  ngOnInit(): void {
  }

  getMunicipio(){
    this.municipio.getMunicipio().subscribe(data => {
      this.municipios = data;
    }, error => console.log(error));
  }

  getPlanos(){
    this.api.getAll().subscribe(data =>{
      this.planos = data;
      console.log(data)
    }, error => console.log(error));
  }

  novoPlano(){
    const data = {
      descricao: this.planoForm.descricao,
      valor: this.planoForm.valor,
      fkmunicipio: this.planoForm.municipio
    }

    this.api.create(data).subscribe(res =>{
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

  deletePlano(id){
    return this.api.delete(id).subscribe(res =>{
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

}
