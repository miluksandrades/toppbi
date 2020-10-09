import { Component, OnInit } from '@angular/core';
import { SetoresService } from 'src/app/services/setores.service';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  public setores: any;

  public setorForm = {
    descricao: ''
  }

  constructor(private api: SetoresService) {
    this.getSetor();
  }

  ngOnInit(): void {
  }

  getSetor(){
    this.api.getSetor().subscribe(data =>{
      this.setores = data;
      console.log(data);
    }, error => console.log(error));
  }

  novoSetor(){
    const data = {
      descricao: this.setorForm.descricao
    }

    this.api.createSetor(data).subscribe(res =>{
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

  deleteSetor(id){
    return this.api.delete(id).subscribe(res =>{
      console.log(res);
      location.reload();
    }, error => console.log(error));
  }

}
