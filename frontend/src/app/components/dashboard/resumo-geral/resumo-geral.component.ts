import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { FrotasService } from 'src/app/services/frotas.service';
import { DadosService } from 'src/app/services/noc/dados.service';

@Component({
  selector: 'app-resumo-geral',
  templateUrl: './resumo-geral.component.html',
  styleUrls: ['./resumo-geral.component.css']
})
export class ResumoGeralComponent implements OnInit {
  totalTask: any;
  toggled: boolean;
  whatsapp: any;
  facebook: any;

  ano: any;

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

  constructor(private api: DadosService, private frota: FrotasService, private atendimento: AtendimentoService) {
    var date = new Date();
    this.ano = date.getUTCFullYear();
    this.atendimento.getAtendimentoWhatsapp().subscribe(data => {
      this.whatsapp = data;
    })

    this.atendimento.getAtendimentoFacebook().subscribe(data => {
      this.facebook = data;
    })

    this.api.getAllTaskPerOperator().subscribe(data =>{
      this.totalTask = data;
    }, error => console.log(error));

    this.frota.consumoGeralMes().subscribe(data =>{
      this.consumo = data;
      this.consumoLabels = this.consumo;
    })

    this.frota.consumoGeralKm().subscribe(data =>{
      this.consumokm = data;
      this.consumoData = this.consumokm;
    })
  }

  sidebarToggle(){
    this.toggled = !this.toggled;
  }

  ngOnInit(): void {
  }

}
