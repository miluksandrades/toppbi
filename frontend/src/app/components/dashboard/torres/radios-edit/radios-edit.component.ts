import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TorresService } from 'src/app/services/torres.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-radios-edit',
  templateUrl: './radios-edit.component.html',
  styleUrls: ['./radios-edit.component.css']
})
export class RadiosEditComponent implements OnInit {

  public radio: any;

  constructor(private api: TorresService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.getRadioById(id).subscribe(data =>{
        this.radio = data;
      }, error => console.log(error));
    })
  }

  onSubmit(f: NgForm){
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.alterRadios(f.value, id).subscribe(res =>{
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
