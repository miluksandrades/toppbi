import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FrotasService } from 'src/app/services/frotas.service';
import { RelatoriosService } from 'src/app/services/relatorios.service';

@Component({
  selector: 'app-equipe-edit',
  templateUrl: './equipe-edit.component.html',
  styleUrls: ['./equipe-edit.component.css']
})
export class EquipeEditComponent implements OnInit {
  equipe: any;

  constructor(private api: FrotasService, private location: Location, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.getEquipeById(id).subscribe(data =>{
        this.equipe = data;
      }, error => console.error(error));
    })
  }

  onSubmit(f: NgForm){
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.alterEquipe(f.value, id).subscribe(res =>{
        console.log(res);
        this.router.navigate(['dashboard/equipes'])
      }, error => console.log(error));
    })
  }

  backOff(){
    this.location.back();
  }

  ngOnInit(): void {
  }

}
