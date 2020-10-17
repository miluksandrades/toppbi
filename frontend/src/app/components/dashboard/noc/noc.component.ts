import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/noc/dados.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-noc',
  templateUrl: './noc.component.html',
  styleUrls: ['./noc.component.css']
})
export class NocComponent implements OnInit {
  public operadoras: any;
  public tiporeg: any;
  public ocorrencia: any;
  public taskToday: any;
  public taskMonth: any;
  public totalTask: any;
  public morDown: any;

  ocorrenciaForm = {
    dtinicio: '',
    dtnormal: '',
    motivo: '',
    fkoperadora: '',
    fktiporeg: ''
  }

  public brava: any;
  public bravavalor: any;
  public bravaOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        color: 'white',
        
      },
    }
  };
  public bravaLabels: Label[] = [];
  public bravaData: number[] = [];
  public bravaType: ChartType = 'pie';
  public bravaLegend = true;
  public bravaColors = [
    {
      backgroundColor: environment.colors,
    },
  ];

  public junto: any;
  public juntovalor: any;
  public juntoOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        color: 'white',
        
      },
    }
  };
  public juntoLabels: Label[] = [];
  public juntoData: number[] = [];
  public juntoType: ChartType = 'pie';
  public juntoLegend = true;
  public juntoColors = [
    {
      backgroundColor: environment.colors
    },
  ];

  public vivo: any;
  public vivovalor: any;
  public vivoOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        color: 'white',
        
      },
    }
  };
  public vivoLabels: Label[] = [];
  public vivoData: number[] = [];
  public vivoType: ChartType = 'pie';
  public vivoLegend = true;
  public vivoColors = [
    {
      backgroundColor: environment.colors
    },
  ];
  public sea: any;
  public seavalor: any;
  public seaOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        color: 'white',
        
      },
    }
  };
  public seaLabels: Label[] = [];
  public seaData: number[] = [];
  public seaType: ChartType = 'pie';
  public seaLegend = true;
  public seaColors = [
    {
      backgroundColor: environment.colors
    },
  ];

  public operadora: any;
  public operadoravalor: any;
  public operadoraOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        color: 'white',
        
      },
    }
  };
  public operadoraLabels: Label[] = [];
  public operadoraData: number[] = [];
  public operadoraType: ChartType = 'pie';
  public operadoraLegend = true;
  public operadoraDataLabel = [pluginDataLabels]
  public operadoraColors = [
    {
      backgroundColor: environment.colors,
    },
  ];

  public ocbrava: any;
  public ocbqtde: any;
  public ocbravaOptions: ChartOptions = {
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
  public ocbravaLabels: Label[] = [];
  public ocbravaType: ChartType = 'bar';
  public ocbravaLegend = true;
  public ocbravaData: ChartDataSets[] = [{ data: [] }];
  public ocbravaColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public ocjunto: any;
  public ocjqtde: any;
  public ocjuntoOptions: ChartOptions = {
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
  public ocjuntoLabels: Label[] = [];
  public ocjuntoType: ChartType = 'bar';
  public ocjuntoLegend = true;
  public ocjuntoData: ChartDataSets[] = [{ data: [] }];
  public ocjuntoColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public ocvivo: any;
  public ocvqtde: any;
  public ocvivoOptions: ChartOptions = {
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
  public ocvivoLabels: Label[] = [];
  public ocvivoType: ChartType = 'bar';
  public ocvivoLegend = true;
  public ocvivoData: ChartDataSets[] = [{ data: [] }];
  public ocvivoColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public ocsea: any;
  public ocsqtde: any;
  public ocseaOptions: ChartOptions = {
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
  public ocseaLabels: Label[] = [];
  public ocseaType: ChartType = 'bar';
  public ocseaLegend = true;
  public ocseaData: ChartDataSets[] = [{ data: [] }];
  public ocseaColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  public registro: any;
  public registroqtde: any;
  public registroOptions: ChartOptions = {
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
  public registroLabels: Label[] = [];
  public registroType: ChartType = 'bar';
  public registroLegend = true;
  public registroData: ChartDataSets[] = [{ data: [] }];
  public registroColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];

  constructor(private api: DadosService) {

    this.api.getOcorrenciaPorMes().subscribe(data =>{
      this.registro = data;
      this.registroLabels = this.registro;
    }, error => console.log(error))

    this.api.getOcorrenciaPorMesQtd().subscribe(data =>{
      this.registroqtde = data;
      this.registroData = this.registroqtde;
    }, error => console.log(error))
    
    this.api.getOperadoras().subscribe(data => {
      this.operadoras = data;
    }, error => console.log(error));

    this.api.getTipoReg().subscribe(data => {
      this.tiporeg = data;
    }, error => console.log(error));

    this.api.getFiveTask().subscribe(data =>{
      this.ocorrencia = data;
    }, error => console.log(error));

    this.api.getAllToday().subscribe(data =>{
      this.taskToday = data;
    }, error => console.log(error));

    this.api.getAllMonth().subscribe(data =>{
      this.taskMonth = data;
    }, error => console.log(error));

    this.api.getAllTaskPerOperator().subscribe(data =>{
      this.totalTask = data;
    }, error => console.log(error));

    this.api.getMorDown().subscribe(data =>{
      this.morDown = data;
    }, error => console.log(error));

    this.api.getBrava().subscribe(data =>{
      this.brava = data;
      this.bravaLabels = this.brava
    }, error => console.log(error));

    this.api.getBravaQtde().subscribe(data =>{
      this.bravavalor = data;
      this.bravaData = this.bravavalor
    }, error => console.log(error));

    this.api.getJunto().subscribe(data =>{
      this.junto = data;
      this.juntoLabels = this.junto
    }, error => console.log(error));

    this.api.getJuntoQtde().subscribe(data =>{
      this.juntovalor = data;
      this.juntoData = this.juntovalor
    }, error => console.log(error));

    this.api.getVivo().subscribe(data =>{
      this.vivo = data;
      this.vivoLabels = this.vivo
    }, error => console.log(error));

    this.api.getVivoQtde().subscribe(data =>{
      this.vivovalor = data;
      this.vivoData = this.vivovalor
    }, error => console.log(error));

    this.api.getSea().subscribe(data =>{
      this.sea = data;
      this.seaLabels = this.sea
    }, error => console.log(error));

    this.api.getSeaQtde().subscribe(data =>{
      this.seavalor = data;
      this.seaData = this.seavalor
    }, error => console.log(error));

    this.api.getDownPerOperator().subscribe(data =>{
      this.operadora = data;
      this.operadoraLabels = this.operadora
    }, error => console.log(error));

    this.api.getDownPerOperatorQtde().subscribe(data =>{
      this.operadoravalor = data;
      this.operadoraData = this.operadoravalor
    }, error => console.log(error));
    
    this.api.getBravaOcorrenciaPorMes().subscribe(data =>{
      this.ocbrava = data;
      this.ocbravaLabels = this.ocbrava;
    })
    this.api.getBravaOcorrenciaPorMesQtd().subscribe(data =>{
      this.ocbqtde = data;
      this.ocbravaData = this.ocbqtde;
    })
    
    this.api.getJuntoOcorrenciaPorMes().subscribe(data =>{
      this.ocjunto = data;
      this.ocjuntoLabels = this.ocjunto;
    })
    this.api.getJuntoOcorrenciaPorMesQtd().subscribe(data =>{
      this.ocjqtde = data;
      this.ocjuntoData = this.ocjqtde;
    })
    
    this.api.getVivoOcorrenciaPorMes().subscribe(data =>{
      this.ocvivo = data;
      this.ocvivoLabels = this.ocvivo;
    })
    this.api.getVivoOcorrenciaPorMesQtd().subscribe(data =>{
      this.ocvqtde = data;
      this.ocvivoData = this.ocvqtde;
    })
    
    this.api.getSeaOcorrenciaPorMes().subscribe(data =>{
      this.ocsea = data;
      this.ocseaLabels = this.ocsea;
    })
    this.api.getSeaOcorrenciaPorMesQtd().subscribe(data =>{
      this.ocsqtde = data;
      this.ocseaData = this.ocsqtde;
    })
  }

  createOcorrencia() {
    const dados = {
      dtinicio: this.ocorrenciaForm.dtinicio,
      dtnormal: this.ocorrenciaForm.dtnormal,
      motivo: this.ocorrenciaForm.motivo,
      fkoperadora: this.ocorrenciaForm.fkoperadora,
      fktiporeg: this.ocorrenciaForm.fktiporeg
    }
    //console.log(dados)

    this.api.createOcorrencia(dados).subscribe(res =>{
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

  ngOnInit(): void {
  }

}
