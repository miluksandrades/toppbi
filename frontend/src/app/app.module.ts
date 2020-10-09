import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './services/login.service';
import { PlanosService } from './services/planos.service';
import { SetoresService } from './services/setores.service';
import { VendedoresService } from './services/vendedores.service';
import { VendasService } from './services/vendas.service';
import { RelatoriosService } from './services/relatorios.service';
import { DadosService } from './services/noc/dados.service';
import { TorresService } from './services/torres.service';
import { SuporteService } from './services/suporte.service';
import { FrotasService } from './services/frotas.service';

import { AppRoutingModule } from './app-routing.module';
import { DashboardRoutingModule } from './components/dashboard/dashboard-routing.module';;
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ResumoComponent } from './components/dashboard/resumo/resumo.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ChartsModule } from 'ng2-charts';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FileUploadModule } from 'ng2-file-upload';

import { CommonModule } from '@angular/common';
import { PlanosComponent } from './components/dashboard/planos/planos.component';
import { SetorComponent } from './components/dashboard/setor/setor.component';
import { VendedorComponent } from './components/dashboard/vendedor/vendedor.component';
import { VendasComponent } from './components/dashboard/vendas/vendas.component';
import { NocComponent } from './components/dashboard/noc/noc.component';
import { FrotaComponent } from './components/dashboard/frota/frota.component';
import { TorresComponent } from './components/dashboard/torres/torres.component';
import { TorresDetailsComponent } from './components/dashboard/torres/torres-details/torres-details.component';
import { TorresEditComponent } from './components/dashboard/torres/torres-edit/torres-edit.component';
import { RadiosEditComponent } from './components/dashboard/torres/radios-edit/radios-edit.component';
import { SuporteComponent } from './components/dashboard/suporte/suporte.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EquipamentosEditComponent } from './components/dashboard/torres/equipamentos-edit/equipamentos-edit.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';
import { SuporteTecnicoComponent } from './components/dashboard/suporte-tecnico/suporte-tecnico.component';
import { CarrosEditComponent } from './components/dashboard/frota/carros-edit/carros-edit.component';
import { EquipeComponent } from './components/dashboard/equipe/equipe.component';
import { EquipeEditComponent } from './components/dashboard/equipe/equipe-edit/equipe-edit.component';
import { CarrosDetailsComponent } from './components/dashboard/frota/carros-details/carros-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginpageComponent,
    ResumoComponent,
    PlanosComponent,
    SetorComponent,
    VendedorComponent,
    VendasComponent,
    NocComponent,
    FrotaComponent,
    TorresComponent,
    TorresDetailsComponent,
    TorresEditComponent,
    RadiosEditComponent,
    SuporteComponent,
    NotFoundComponent,
    EquipamentosEditComponent,
    UsuariosComponent,
    SuporteTecnicoComponent,
    CarrosEditComponent,
    EquipeComponent,
    EquipeEditComponent,
    CarrosDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    JwPaginationModule,
    ChartsModule,
    FileUploadModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    LoginService,
    PlanosService,
    SetoresService,
    VendedoresService,
    VendasService,
    RelatoriosService,
    DadosService,
    TorresService,
    SuporteService,
    FrotasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
