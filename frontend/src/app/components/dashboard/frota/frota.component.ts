import { Component, OnInit } from '@angular/core';
import { FrotasService } from 'src/app/services/frotas.service';
import { RelatoriosService } from 'src/app/services/relatorios.service';

@Component({
  selector: 'app-frota',
  templateUrl: './frota.component.html',
  styleUrls: ['./frota.component.css']
})
export class FrotaComponent implements OnInit {

  public carros: any;
  public equipes: any;
  public municipios: any;

  public litrosgastos: any;
  public kmrodados: any;
  public customensal: any;
  public custoporkm: any;
  public kmporlitro: any;
  
  pageOfItems: Array<any>;

  public carroForm = {
    marca: '',
    modelo: '',
    anomodelo: '',
    placa: '',
    chassi: '',
    fkequipe: '',
    fkmunicipio: ''
  }

  constructor(private api: FrotasService, private relatorio: RelatoriosService) {
    this.api.getCarros().subscribe(data => {
      this.carros = data;
    })

    this.api.getEquipe().subscribe(data =>{
      this.equipes = data;
    })

    this.relatorio.getMunicipio().subscribe(data =>{
      this.municipios = data;
    })

    this.api.getQuilometrosRodados().subscribe(data =>{
      this.kmrodados = data;
    })

    this.api.getLitrosGastos().subscribe(data =>{
      this.litrosgastos = data;
    })

    this.api.getCustoMensal().subscribe(data =>{
      this.customensal = data;
    })

    this.api.mediaCustoPorKm().subscribe(data =>{
      this.custoporkm = data;
    })

    this.api.mediaKmPorLitro().subscribe(data =>{
      this.kmporlitro = data;
    })
  }

  createCarro() {
    const data = {
      marca: this.carroForm.marca,
      modelo: this.carroForm.modelo,
      anomodelo: this.carroForm.anomodelo,
      placa: this.carroForm.placa,
      chassi: this.carroForm.chassi,
      fkequipe: this.carroForm.fkequipe,
      fkmunicipio: this.carroForm.fkmunicipio
    }
    this.api.createCarro(data).subscribe(res => console.log(res), error => console.error());
    location.reload();
  }

  deleteCarro(id) {
    this.api.deleteCarro(id).subscribe(res => {
      console.log(res);
    })
    location.reload();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  ngOnInit(): void {
  }

}
