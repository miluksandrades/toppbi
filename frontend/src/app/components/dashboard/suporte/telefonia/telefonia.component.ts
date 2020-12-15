import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-telefonia',
  templateUrl: './telefonia.component.html',
  styleUrls: ['./telefonia.component.css']
})
export class TelefoniaComponent implements OnInit {

  public setembro: any;
  public setembrovalor: any;
  public setembroOptions: ChartOptions = {
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
  public setembroLabels: Label[] = ['Respondidas', 'Não Respondidas'];
  public setembroData: number[] = [1614, 896];
  public setembroType: ChartType = 'pie';
  public setembroLegend = true;
  public setembroColors = [
    {
      backgroundColor: ["#0d5ac1", "#1c0365", "#4ca2f9", "#6119d0", "#651be6",
    "#566ca0", "#2f1179", "#513d98", "#4b5bdc", "#250662", "#2980b9",
    "#3498db", "#17c0eb", "#4b4b4b", "#3d3d3d", "#67e6dc", "#2c2c54",
    "#40407a", "#706fd3"],
    },
  ];

  public outubro: any;
  public outubrovalor: any;
  public outubroOptions: ChartOptions = {
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
  public outubroLabels: Label[] = ['Respondidas', 'Não Respondidas'];
  public outubroData: number[] = [1660, 4374];
  public outubroType: ChartType = 'pie';
  public outubroLegend = true;
  public outubroColors = [
    {
      backgroundColor: ["#0d5ac1", "#1c0365", "#4ca2f9", "#6119d0", "#651be6",
    "#566ca0", "#2f1179", "#513d98", "#4b5bdc", "#250662", "#2980b9",
    "#3498db", "#17c0eb", "#4b4b4b", "#3d3d3d", "#67e6dc", "#2c2c54",
    "#40407a", "#706fd3"],
    },
  ];

  public novembro: any;
  public novembrovalor: any;
  public novembroOptions: ChartOptions = {
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
  public novembroLabels: Label[] = ['Respondidas', 'Não Respondidas'];
  public novembroData: number[] = [1557, 336];
  public novembroType: ChartType = 'pie';
  public novembroLegend = true;
  public novembroColors = [
    {
      backgroundColor: ["#0d5ac1", "#1c0365", "#4ca2f9", "#6119d0", "#651be6",
    "#566ca0", "#2f1179", "#513d98", "#4b5bdc", "#250662", "#2980b9",
    "#3498db", "#17c0eb", "#4b4b4b", "#3d3d3d", "#67e6dc", "#2c2c54",
    "#40407a", "#706fd3"],
    },
  ];
  
  constructor() { }



  ngOnInit(): void {
  }

}
