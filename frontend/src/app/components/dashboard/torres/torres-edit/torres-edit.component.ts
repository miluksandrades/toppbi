import { Component, OnInit } from '@angular/core';
import { TorresService } from 'src/app/services/torres.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RelatoriosService } from 'src/app/services/relatorios.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-torres-edit',
  templateUrl: './torres-edit.component.html',
  styleUrls: ['./torres-edit.component.css']
})
export class TorresEditComponent implements OnInit {

  public element: any;
  public municipios: any;

  constructor(private location: Location, private api: TorresService, private route: ActivatedRoute, private router: Router, private relatorio: RelatoriosService) {
    this.relatorio.getMunicipio().subscribe(data => {
      this.municipios = data;
    }, error => console.log(error))

    this.route.params.subscribe((params: Params) => {
      const id = Number.parseInt(params['id']);

      this.api.getTorreById(id).subscribe(data => {
        this.element = data;
      }, error => console.log(error))
    }, error => console.log(error))
  }

  onSubmit(f: NgForm) {

    this.route.params.subscribe((params: Params) => {
      const id = Number.parseInt(params['id']);

      this.api.alterTorre(f.value, id).subscribe(res => {
        console.log(res)
        this.router.navigate(['dashboard/torres'])
      }, error => console.log(error));
    })

  }

  backOff(){
    this.location.back()
  }

  ngOnInit(): void {
  }

}
