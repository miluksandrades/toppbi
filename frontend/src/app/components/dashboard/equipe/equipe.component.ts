import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FrotasService } from 'src/app/services/frotas.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipes: any;
  pageOfItems: Array<any>;

  public equipeForm = {
    responsavel: '',
    auxiliar: ''
  }

  constructor(private api: FrotasService, private location: Location) {
    this.api.getEquipe().subscribe(data => {
      this.equipes = data;
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  createEquipe() {
    const data = {
      responsavel: this.equipeForm.responsavel,
      auxiliar: this.equipeForm.auxiliar,
    }

    this.api.createEquipe(data).subscribe(res => console.log(res),
      error => console.error(error))
    location.reload();
  }

  deleteEquipe(id) {
    this.api.deleteEquipe(id).subscribe(res => console.log(res),
      error => console.error(error));
    location.reload();
  }

  ngOnInit(): void {
  }

}
