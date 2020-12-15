import { Component, OnInit } from '@angular/core';
import { RelatoriosService } from 'src/app/services/relatorios.service';

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { Label } from 'ng2-charts';
import { VendedoresService } from 'src/app/services/vendedores.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  public municipios: any;
  public plan_id: any;
  public vendedor_id: any;
  public soma: any;
  public somaDia: any;
  public planovendido: any;
  public vendedor: any;
  public color = ["#0d5ac1", "#1c0365", "#4ca2f9", "#6119d0", "#651be6",
  "#566ca0", "#2f1179", "#513d98", "#4b5bdc", "#250662", "#2980b9",
  "#3498db", "#17c0eb", "#4b4b4b", "#3d3d3d", "#67e6dc", "#2c2c54",
  "#40407a", "#706fd3"]

  //----------------------------------------------------
  public labels: any;
  public values: any;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        color: 'white',
      },
    }
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
  //----------------------------------------------------
  public vendedores: any;
  public qtd: any;
  public vendasOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        color: 'white',
      },
    }
  };
  public vendasLabels: Label[] = [];
  public vendasData: number[] = [];
  public vendasType: ChartType = 'pie';
  public vendasLegend = true;
  public vendasColors = [
    {
      backgroundColor: this.color,
    },
  ];
  //----------------------------------------------------
  public mes: any;
  public valor: any;
  public barChartOptions: ChartOptions = {
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
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [
    { data: [] }
  ];
  public barChartColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ];
  //----------------------------------------------------
  public plano: any;
  public pvalor: any;
  public planoOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        color: 'white',
      },
    }
  };
  public planoLabels: Label[] = [];
  public planoData: number[] = [];
  public planoType: ChartType = 'pie';
  public planoLegend = true;
  public planoColors = [
    {
      backgroundColor: this.color,
    },
  ];
  //----------------------------------------------------
  public mounth: any;
  public mounthvalor: any;
  public mounthOptions: ChartOptions = {
    responsive: true,
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
  //----------------------------------------------------
  constructor(private api: RelatoriosService, private vendedor_api: VendedoresService) {
    this.api.getMunicipio().subscribe(data => {
      this.municipios = data
    }, error => console.log(error));

  }

  getVendedor(vendedor: any) {
    this.vendedor_id = vendedor.target.value;

    this.api.getVendasPorVendedorMes(this.plan_id, this.vendedor_id).subscribe(data => {
      this.mounth = data;
      this.mounthLabels = this.mounth;

    });
    this.api.getVendasPorVendedorMesValor(this.plan_id, this.vendedor_id).subscribe(data => {
      this.mounthvalor = data;
      this.mounthData = this.mounthvalor
      console.log(this.mounthvalor)
    });
  }

  getColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
  }

  getRelatorios(id: any) {
    this.plan_id = id.target.value;

    this.api.getTotal(this.plan_id).subscribe(data => {
      this.soma = data;
    }, error => console.log(error));

    this.api.getTotalDia(this.plan_id).subscribe(data => {
      this.somaDia = data;
    }, error => console.log(error));

    this.api.getPlanoMaisVendido(this.plan_id).subscribe(data => {
      this.planovendido = data;
    }, error => console.log(error));

    this.api.getVendasPorMes(this.plan_id).subscribe(data => {
      this.mes = data;
      this.barChartLabels = this.mes;

    });
    this.api.getVendasPorMesValor(this.plan_id).subscribe(data => {
      this.valor = data;
      this.barChartData = this.valor;
    });

    this.api.getPlanosVendidosDescricao(this.plan_id).subscribe(data => {
      this.labels = data;
      this.pieChartLabels = this.labels
    });

    this.api.getPlanosVendidosQtd(this.plan_id).subscribe(data => {
      this.values = data;
      this.pieChartData = this.values
    });

    this.api.getVendasPorVendedor(this.plan_id).subscribe(data => {
      this.vendedores = data;
      this.vendasLabels = this.vendedores
    });
    this.api.getVendasPorVendedorQtd(this.plan_id).subscribe(data => {
      this.qtd = data;
      this.vendasData = this.qtd;
    });

    this.api.getVendasPorPlano(this.plan_id).subscribe(data => {
      this.plano = data;
      this.planoLabels = this.plano
    });
    this.api.getVendasPorPlanoValor(this.plan_id).subscribe(data => {
      this.pvalor = data;
      this.planoData = this.pvalor;
    });

    this.vendedor_api.getVendedorByMunicipio(this.plan_id).subscribe(data => {
      this.vendedor = data;
    }, error => console.log(error));
  }

  ngOnInit(): void {
  }

}
