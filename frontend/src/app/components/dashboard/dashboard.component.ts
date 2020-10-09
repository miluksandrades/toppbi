import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ano: any;

  public lancamentos = [
    { file: 'qwywexe2334.csv', user: 'Lucas', time: '12:38:00' },
    { file: 'qwywexe2334.csv', user: 'Pedro', time: '12:35:00' },
    { file: 'qwywexe2334.csv', user: 'Tota', time: '12:30:00' },
    { file: 'qwywexe2334.csv', user: 'Daniel', time: '12:20:00' },
    { file: 'qwywexe2334.csv', user: 'Lucio', time: '02:00:00' },
  ]

  constructor() {
    let year = new Date();

    this.ano = year.getFullYear();
  }

  ngOnInit(): void {
  }

  text: any;
  vetor = [];

  csvJSON(csvText) {
    var lines = csvText.split("\n");

    var result = [];

    var headers = lines[0].split(",");
    //console.log(headers);
    for (var i = 1; i < lines.length - 1; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[0]] = currentline[0];
        obj[headers[1]] = currentline[1];
      }
      result.push(obj);
    }

    this.vetor = result;
  }

  convertFile(input) {
    const reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = () => {
      let text = reader.result;
      this.text = text;
      //console.log(text);
      this.csvJSON(text);
    };

  }

}
