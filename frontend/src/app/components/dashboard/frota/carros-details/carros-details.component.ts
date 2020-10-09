import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { FrotasService } from 'src/app/services/frotas.service';
import { environment } from 'src/environments/environment';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-carros-details',
  templateUrl: './carros-details.component.html',
  styleUrls: ['./carros-details.component.css']
})
export class CarrosDetailsComponent implements OnInit {

  public carro: any;
  public combustivel: any;
  public km: any;
  public metragem: any;

  public comb: any;
  public qtdcomb: any;
  public combustivelOptions: ChartOptions = {
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
  public combustivelLabels: Label[] = [];
  public combustivelType: ChartType = 'bar';
  public combustivelLegend = true;
  public combustivelPlugins = [pluginDataLabels];

  public combustivelData: ChartDataSets[] = [{ data: [] }];
  public combustivelColor: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public kilo: any;
  public qtdkilo: any;
  public kmOptions: ChartOptions = {
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
  public kmLabels: Label[] = [];
  public kmType: ChartType = 'bar';
  public kmLegend = true;
  public kmPlugins = [pluginDataLabels];

  public kmData: ChartDataSets[] = [{ data: [] }];
  public kmColor: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  constructor(private api: FrotasService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.getCarroInfo(id).subscribe(data =>{
        this.carro = data;
      }, error => console.error(error));

      this.api.getCombustivelMes(id).subscribe(data =>{
        this.comb = data;
        this.combustivelLabels = this.comb
      }, error => console.error(error))

      this.api.getCombustivelMesQtd(id).subscribe(data =>{
        this.qtdcomb = data;
        this.combustivelData = this.qtdcomb;
      }, error => console.error(error))

      this.api.getKmMes(id).subscribe(data =>{
        this.kilo = data;
        this.kmLabels = this.kilo;
      }, error => console.error(error));

      this.api.getKmMesQtd(id).subscribe(data =>{
        this.qtdkilo = data;
        this.kmData = this.qtdkilo;
      }, error => console.error(error));

      this.api.getMetragemId(id).subscribe(data =>{
        this.metragem = data;
      }, error => console.error(error))
    })
  }

  ngOnInit(): void {
  }

}
