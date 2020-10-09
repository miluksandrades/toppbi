import { Component, OnInit } from '@angular/core';
import { TorresService } from 'src/app/services/torres.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-equipamentos-edit',
  templateUrl: './equipamentos-edit.component.html',
  styleUrls: ['./equipamentos-edit.component.css']
})
export class EquipamentosEditComponent implements OnInit {

  public equipamento: any

  constructor(private api: TorresService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.getEquipamentosById(id).subscribe(data =>{
        this.equipamento = data;
      }, error => console.log(error));
    })
  }

  onSubmit(f: NgForm){
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.alterEquipamentos(f.value, id).subscribe(res =>{
        console.log(res);
        this.location.back();
      }, error => console.log(error));
    })
  }

  backOff(){
    this.location.back();
  }

  ngOnInit(): void {
  }

}
