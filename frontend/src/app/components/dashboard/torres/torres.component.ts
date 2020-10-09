import { Component, OnInit } from '@angular/core';
import { TorresService } from 'src/app/services/torres.service';
import { RelatoriosService } from 'src/app/services/relatorios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torres',
  templateUrl: './torres.component.html',
  styleUrls: ['./torres.component.css']
})
export class TorresComponent implements OnInit {

  torreAtm: any;
  torreBn: any;
  torreMed: any;

  atm:any;
  bn:any;
  med:any;

  resumoRadios: any;
  resumoEquip: any;
  resumoAntena: any;
  municipios: any;
  rota = 'http://10.200.2.136:3333/static/';

  torreForm = {
    descricao: '',
    ip: '',
    municipio: '',
    endereco: '',
    bairro: '',
    tipotorre: '',
    obs: ''
  }

  constructor(private api: TorresService, private relatorio: RelatoriosService, private router: Router) {
    this.api.getTorresAtm().subscribe(data => {
      this.torreAtm = data;
    })
    this.api.getTorresBn().subscribe(data => {
      this.torreBn = data;
    })
    this.api.getTorresMed().subscribe(data => {
      this.torreMed = data;
    })

    this.api.getConexaoAtm().subscribe(data =>{
      this.atm = data;
    })
    this.api.getConexaoBn().subscribe(data =>{
      this.bn = data;
    })
    this.api.getConexaoMed().subscribe(data =>{
      this.med = data;
    })
    
    this.relatorio.getMunicipio().subscribe(data => {
      this.municipios = data;
    })
    this.api.getResumoEquipamentos().subscribe(data =>{
      this.resumoEquip = data;
    })
    this.api.getResumoRadios().subscribe(data =>{
      this.resumoRadios = data;
    })
    this.api.getResumoAntenas().subscribe(data =>{
      this.resumoAntena = data;
    })
  }

  createTorre() {
    const data = {
      descricao: this.torreForm.descricao,
      ip: this.torreForm.ip,
      endereco: this.torreForm.endereco,
      bairro: this.torreForm.bairro,
      tipotorre: this.torreForm.tipotorre,
      obs: this.torreForm.obs,
      fkmunicipio: this.torreForm.municipio,
    }

    this.api.postTorre(data).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

  
  deleteTorre(id) {
    this.api.deleteTorre(id).subscribe(res => {
      console.log(res);
      location.reload();
    }, error => console.log(error))
  }

  ngOnInit(): void {
  }

}
