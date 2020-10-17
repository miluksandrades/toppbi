import { Component, OnInit } from '@angular/core';
import { SuporteService } from 'src/app/services/suporte.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RelatoriosService } from 'src/app/services/relatorios.service';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent implements OnInit {

  public municipios: any;

  public cancForm = {
    dtcancelamento: '',
    qtde: '',
    fkmunicipio: ''
  }
  public retForm = {
    dtretencao: '',
    qtde: '',
    fkmunicipio: ''
  }
  public migForm = {
    dtmigracao: '',
    qtde: '',
    fkmunicipio: ''
  }
  public mudendForm = {
    dtmudend: '',
    qtde: '',
    fkmunicipio: ''
  }
  public mudplanForm = {
    dtmudplan: '',
    qtde: '',
    fkmunicipio: ''
  }

  public canc: any;
  public qtde: any;
  public mounthOptions: ChartOptions = {
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
  public mounthLabels: Label[] = [];
  public mounthType: ChartType = 'bar';
  public mounthLegend = true;
  public mounthData: ChartDataSets[] = [{ data: [] }];
  public mounthColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public ret: any;
  public rqtde: any;
  public retencaoOptions: ChartOptions = {
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
  public retencaoLabels: Label[] = [];
  public retencaoType: ChartType = 'bar';
  public retencaoLegend = true;
  public retencaoData: ChartDataSets[] = [{ data: [] }];
  public retencaoColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public mig: any;
  public mqtde: any;
  public migracaoOptions: ChartOptions = {
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
  public migracaoLabels: Label[] = [];
  public migracaoType: ChartType = 'bar';
  public migracaoLegend = true;
  public migracaoData: ChartDataSets[] = [{ data: [] }];
  public migracaoColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public mudend: any;
  public meqtde: any;
  public mudendOptions: ChartOptions = {
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
  public mudendLabels: Label[] = [];
  public mudendType: ChartType = 'bar';
  public mudendLegend = true;
  public mudendData: ChartDataSets[] = [{ data: [] }];
  public mudendColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public mudplan: any;
  public mpqtde: any;
  public mudplanOptions: ChartOptions = {
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
  public mudplanLabels: Label[] = [];
  public mudplanType: ChartType = 'bar';
  public mudplanLegend = true;
  public mudplanData: ChartDataSets[] = [{ data: [] }];
  public mudplanColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  constructor(private api: SuporteService, private relatorios: RelatoriosService) {
    this.api.getCancPorMes().subscribe(data => {
      this.canc = data;
      this.mounthLabels = this.canc
    }, error => console.error(error));

    this.api.getCancPorMesQtde().subscribe(data => {
      this.qtde = data;
      this.mounthData = this.qtde
    }, error => console.error(error));

    this.api.getRetPorMes().subscribe(data => {
      this.ret = data;
      this.retencaoLabels = this.ret
    }, error => console.error(error));

    this.api.getRetPorMesQtde().subscribe(data => {
      this.rqtde = data;
      this.retencaoData = this.rqtde
    }, error => console.error(error));

    this.api.getMigPorMes().subscribe(data => {
      this.mig = data;
      this.migracaoLabels = this.mig;
    }, error => console.error(error));

    this.api.getMigPorMesQtde().subscribe(data => {
      this.mqtde = data;
      this.migracaoData = this.mqtde;
    }, error => console.error(error));

    this.relatorios.getMunicipio().subscribe(data => {
      this.municipios = data;
    }, error => console.error(error));

    this.api.getMudEndPorMes().subscribe(data => {
      this.mudend = data;
      this.mudendLabels = this.mudend;
    }, error => console.error(error));
    this.api.getMudEndPorMesQtde().subscribe(data => {
      this.meqtde = data;
      this.mudendData = this.meqtde;
    }, error => console.error(error));

    this.api.getMudPlanPorMes().subscribe(data => {
      this.mudplan = data;
      this.mudplanLabels = this.mudplan;
    }, error => console.error(error));
    this.api.getMudPlanPorMesQtde().subscribe(data => {
      this.mpqtde = data;
      this.mudplanData = this.mpqtde;
    }, error => console.error(error));
    
  }

  createCanc() {
    var data = {
      dtcancelamento: this.cancForm.dtcancelamento,
      qtde: this.cancForm.qtde,
      fkmunicipio: this.cancForm.fkmunicipio
    }
    this.api.createCanc(data).subscribe(res => {
      console.log(res)
      location.reload();
    }, error => console.error(error))
  }
  createRet() {
    var data = {
      dtretencao: this.retForm.dtretencao,
      qtde: this.retForm.qtde,
      fkmunicipio: this.retForm.fkmunicipio
    }

    this.api.createRet(data).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.error(error))
  }
  createMig() {
    var data = {
      dtmigracao: this.migForm.dtmigracao,
      qtde: this.migForm.qtde,
      fkmunicipio: this.migForm.fkmunicipio
    }

    this.api.createMig(data).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.error(error))
  }
  createMudEnd() {
    var data = {
      dtmudend: this.mudendForm.dtmudend,
      qtde: this.mudendForm.qtde,
      fkmunicipio: this.mudendForm.fkmunicipio
    }

    this.api.createMudEnd(data).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.error(error))
  }
  createMudPlan() {
    var data = {
      dtmudplan: this.mudplanForm.dtmudplan,
      qtde: this.mudplanForm.qtde,
      fkmunicipio: this.mudplanForm.fkmunicipio
    }

    this.api.createMudPlan(data).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.error(error))
  }

  ngOnInit(): void {
  }

}
