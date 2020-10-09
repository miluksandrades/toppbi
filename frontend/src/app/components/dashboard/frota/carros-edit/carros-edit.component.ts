import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FrotasService } from 'src/app/services/frotas.service';

@Component({
  selector: 'app-carros-edit',
  templateUrl: './carros-edit.component.html',
  styleUrls: ['./carros-edit.component.css']
})
export class CarrosEditComponent implements OnInit {

  public carro: any;
  public equipe: any;

  constructor(private api: FrotasService, private route: ActivatedRoute, private router: Router, private location: Location) {
      this.route.params.subscribe((params: Params) =>{
        const id = Number.parseInt(params['id']);

        this.api.getCarrosById(id).subscribe(data =>{
          this.carro = data;
        }, error => console.error(error));
      })

      this.api.getEquipe().subscribe(data =>{
        this.equipe = data;
      }, error => console.error(error))
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.alterCarro(f.value, id).subscribe(res =>{
        console.log(res);
        this.router.navigate(['dashboard/frota'])
      }, error => console.log(error));
    })
  }

  backOff(){
    this.router.navigate(['dashboard/frota']);
  }

}
