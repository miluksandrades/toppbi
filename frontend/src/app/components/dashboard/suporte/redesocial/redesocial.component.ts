import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-redesocial',
  templateUrl: './redesocial.component.html',
  styleUrls: ['./redesocial.component.css']
})
export class RedesocialComponent implements OnInit {

  public color = environment.colors;
  public dtinicio = '2020-09-01';
  public dtfim = '2020-09-30';

  public whatsapp: any;
  public facebook: any;
  public total: any;
  public tabela: any;

  public ldia: any;
  public qdia: any;
  public diaOptions: ChartOptions = {
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
  public diaLabels: Label[] = [];
  public diaType: ChartType = 'line';
  public diaLegend = true;
  public diaData: ChartDataSets[] = [{ data: [] }];
  public diaColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(52, 152, 219,0.3)',
      borderColor: 'rgba(52, 152, 219,1.0)',
      pointBackgroundColor: 'rgba(52, 152, 219,1.0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(52, 152, 219,1.0)'
    }
  ];

  public lwhats: any;
  public qwhats: any;
  public whatsOptions: ChartOptions = {
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
  public whatsLabels: Label[] = [];
  public whatsType: ChartType = 'bar';
  public whatsLegend = true;
  public whatsData: ChartDataSets[] = [{ data: [] }];
  public whatsColors: Array<any> = [
    { // first color
      backgroundColor: '#2ecc71',
      borderColor: '#2ecc71',
      pointBackgroundColor: '#2ecc71',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2ecc71'
    }
  ];

  public lface: any;
  public qface: any;
  public faceOptions: ChartOptions = {
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
  public faceLabels: Label[] = [];
  public faceType: ChartType = 'bar';
  public faceLegend = true;
  public faceData: ChartDataSets[] = [{ data: [] }];
  public faceColors: Array<any> = [
    { // first color
      backgroundColor: '#3498db',
      borderColor: '#3498db',
      pointBackgroundColor: '#3498db',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#3498db'
    }
  ];

  public labels: any;
  public values: any;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        color: 'white',
        anchor: 'end',
        align: 'start',
        formatter: (value, context) =>{
          return value+ '%';
        },
        labels: {
          title: {
            font: {
              weight: 'bold'
            }
          }
        }

        /* formatter: (value, context) =>{
          return Math.round(value*100) + '%'
        } */
      },
    },
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels]
  public pieChartColors = [
    {
      backgroundColor: this.color,
    },
  ];

  constructor(private atendimento: AtendimentoService) {
    this.atendimento.getAtendimentoWhatsapp().subscribe(data => {
      this.whatsapp = data;
    })

    this.atendimento.getAtendimentoFacebook().subscribe(data => {
      this.facebook = data;
    })

    this.atendimento.getAtendimentos().subscribe(data => {
      this.total = data;
    })

    this.atendimento.getAtendimentoWhatsappMes().subscribe(data => {
      this.lwhats = data;
      this.whatsLabels = this.lwhats;
    })

    this.atendimento.getAtendimentoWhatsappQtd().subscribe(data => {
      this.qwhats = data;
      this.whatsData = this.qwhats;
    })

    this.atendimento.getAtendimentoFacebookMes().subscribe(data => {
      this.lface = data;
      this.faceLabels = this.lface;
    })

    this.atendimento.getAtendimentoFacebookQtd().subscribe(data => {
      this.qface = data;
      this.faceData = this.qface;
    })

    this.atendimento.getAtendimentoPorAgente().subscribe(data => {
      this.labels = data;
      this.pieChartLabels = this.labels;
    })

    this.atendimento.getAtendimentoPorAgenteQtd().subscribe(data => {
      this.values = data;
      this.pieChartData = this.values;
    })

    this.atendimento.getAntendimentoPorAgenteTabela().subscribe(data =>{
      this.tabela = data;
    })
  }

  getDados() {

    var dtinicio = this.dtinicio;
    var dtfim = this.dtfim;

    this.atendimento.getAtendimentoDia(dtinicio, dtfim).subscribe(data => {
      this.ldia = data;
      this.diaLabels = this.ldia;
    })

    this.atendimento.getAtendimentoQtd(dtinicio, dtfim).subscribe(data => {
      this.qdia = data;
      this.diaData = this.qdia;
    })
  }

  ngOnInit(): void {
  }

}
