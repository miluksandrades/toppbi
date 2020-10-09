import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TorresService } from 'src/app/services/torres.service';
import { Location } from '@angular/common';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-torres-details',
  templateUrl: './torres-details.component.html',
  styleUrls: ['./torres-details.component.css']
})
export class TorresDetailsComponent implements OnInit {
  
  radios: any;
  equipamentos: any;
  torre: any;
  numConexoes: any;

  images: any;

  URL = 'http://10.200.2.136:3333/api/upload'

  public uploader: FileUploader;

  radioForm = {
    descricao: '',
    marca: '',
    modelo: '',
    antena: '',
    ip: '',
    mac: '',
    frequencia: '',
    numclientes: '',
    obs: '',
    valor: ''
  }

  equipamentoForm = {
    descricao: '',
    marca: '',
    qtde: '',
    obs: '',
    valor: ''
  }

  constructor(private location: Location, private route: ActivatedRoute, private api: TorresService, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      const id = Number.parseInt(params['id']);

      this.uploader = new FileUploader({ url: this.URL+'/'+ id, itemAlias: 'photo' });

      this.api.getTorreById(id).subscribe(data => {
        this.torre = data
      })

      this.api.getRadios(id).subscribe(data => {
        this.radios = data;
      })

      this.api.getEquipamentos(id).subscribe(data => {
        this.equipamentos = data;
      })

      this.api.getImagemId(id).subscribe(data =>{
        this.images = data;
      })

      this.api.getNumConexoes(id).subscribe(data =>{
        this.numConexoes = data;
      })
    })
  }

  createRadio() {
    const data = {
      descricao: this.radioForm.descricao,
      marca: this.radioForm.marca,
      modelo: this.radioForm.modelo,
      antena: this.radioForm.antena,
      ip: this.radioForm.ip,
      mac: this.radioForm.mac,
      frequencia: this.radioForm.frequencia,
      numclientes: this.radioForm.numclientes,
      obs: this.radioForm.obs,
      valor: this.radioForm.valor
    }

    this.route.params.subscribe((params: Params) => {
      const id = Number.parseInt(params['id']);

      this.api.createRadio(data, id).subscribe(res => {
        console.log(res);
        location.reload();
      }, error => console.log(error));
    });

  }

  editar(id) {
    this.router.navigate(['dashboard/radios/edit', id])
  }
  editarE(id) {
    this.router.navigate(['dashboard/equipamento/edit', id])
  }

  deleteRadio(id) {
    this.api.deleteRadio(id).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.log(error, 'Deu erro caralho'))
  }

  createEquipamento() {
    const data = {
      descricao: this.equipamentoForm.descricao,
      marca: this.equipamentoForm.marca,
      qtde: this.equipamentoForm.qtde,
      obs: this.equipamentoForm.obs,
      valor: this.equipamentoForm.valor
    }

    this.route.params.subscribe((params: Params) => {
      const id = Number.parseInt(params['id']);

      this.api.createEquipamento(data, id).subscribe(res => {
        console.log(res);
        location.reload();
      }, error => console.log(error));
    });
  }

  deleteEquipamento(id) {
    this.api.deleteEq(id).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.log(error, 'Deu erro caralho'))
  }

  backOff() {
    this.router.navigate(['dashboard/torres'])
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
    };
  }

  deleteImagem(id){
    this.api.deleteImagem(id).subscribe(res =>{
      console.log(res);
      location.reload();
    })
  }

  reload(){
    location.reload();
  }

  print(): void {
    let tradios, tcabecalho, tequip, popupWin;
    tradios = document.getElementById('tradios').innerHTML;
    tcabecalho = document.getElementById('tcabecalho').innerHTML;
    tequip = document.getElementById('tequip').innerHTML;
    //console.log(radios)
    popupWin = window.open('', '_blank', 'top=0,left=0,height=600,width=800');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Resumo Geral</title>
          <style>
            @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
            .no-print{display: none}
          </style>
        </head>
        <body onload="window.print();" >
          <br>
          <div class="text-center">
            <h4 class="h4">TOPPNET TELECOM</h4>            
          </div>
          <br>
          <div class="text-center">
            <p class="lead"><b>Resumo Geral</b></p>
          </div>
          <br>
          ${tcabecalho}
          <br>
          <h6 class="h6">Rádios</h6>
          ${tradios}
          <br>
          <h6 class="h6">Equipamentos</h6>
          ${tequip}
        </body>
      </html>`
    );
    popupWin.document.close();
  }

}
