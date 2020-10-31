import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-statusservices',
  templateUrl: './statusservices.component.html',
  styleUrls: ['./statusservices.component.css']
})
export class StatusservicesComponent implements OnInit {

  statusForm = {
    link: '',
    voalle: '',
    anm: '',
    dude: '',
    c3x: '',
    smartolt: '',
    smartomni: '',
    smartmaps: '',
    responsavel: ''
  }

  constructor(private api: EmailService) { }

  ngOnInit(): void {
  }

  salvarStatus() {
    const dados = {
      link: this.statusForm.link,
      voalle: this.statusForm.voalle,
      anm: this.statusForm.anm,
      dude: this.statusForm.dude,
      c3x: this.statusForm.c3x,
      smartolt: this.statusForm.smartolt,
      smartomni: this.statusForm.smartomni,
      smartmaps: this.statusForm.smartmaps,
      responsavel: this.statusForm.responsavel
    }

    this.api.sendEmail(dados).subscribe(res => {
      console.log(res);
    })

  }

}
