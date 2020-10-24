import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
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

  public consumo: any;
  public consumokm: any;
  public consumolt: any;
  public consumoOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        color: 'black',
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public consumoLabels: Label[] = [];
  public consumoType: ChartType = 'bar';
  public consumoLegend = true;
  public consumoData: ChartDataSets[] = [{ data: [] }];
  public consumoColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

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

    this.api.consumoGeralMes().subscribe(data =>{
      this.consumo = data;
      this.consumoLabels = this.consumo;
    })

    this.api.consumoGeralKm().subscribe(data =>{
      this.consumokm = data;
      this.consumoData = this.consumokm;
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
